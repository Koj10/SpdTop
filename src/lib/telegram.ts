import dns from "node:dns";

// Prefer IPv4 — some VPS/Docker setups hang on IPv6 to api.telegram.org
dns.setDefaultResultOrder("ipv4first");

const TELEGRAM_API = process.env.TELEGRAM_API_URL ?? "https://api.telegram.org";
const REQUEST_TIMEOUT_MS = 15_000;

export type TelegramSendError =
  | { code: "not_configured" }
  | { code: "network_error"; cause?: unknown }
  | { code: "telegram_error"; status: number; body: string; description?: string };

export type TelegramSendResult =
  | { ok: true }
  | { ok: false; error: TelegramSendError };

function readEnv(name: string): string {
  return process.env[name]?.trim() ?? "";
}

function parseChatId(raw: string): string | number {
  if (/^-?\d+$/.test(raw)) {
    const numeric = Number(raw);
    if (Number.isSafeInteger(numeric)) return numeric;
  }
  return raw;
}

export function parseTelegramApiError(body: string): string | undefined {
  try {
    const data = JSON.parse(body) as { description?: string };
    return data.description;
  } catch {
    return undefined;
  }
}

export async function telegramGetMe(): Promise<TelegramSendResult & { username?: string }> {
  const token = readEnv("TELEGRAM_BOT_TOKEN");
  if (!token) {
    return { ok: false, error: { code: "not_configured" } };
  }

  let response: Response;

  try {
    response = await fetch(`${TELEGRAM_API}/bot${token}/getMe`, {
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch (cause) {
    return { ok: false, error: { code: "network_error", cause } };
  }

  const body = await response.text();

  if (!response.ok) {
    return {
      ok: false,
      error: {
        code: "telegram_error",
        status: response.status,
        body,
        description: parseTelegramApiError(body),
      },
    };
  }

  try {
    const data = JSON.parse(body) as { result?: { username?: string } };
    return { ok: true, username: data.result?.username };
  } catch {
    return { ok: true };
  }
}

export async function sendTelegramMessage(text: string): Promise<TelegramSendResult> {
  const token = readEnv("TELEGRAM_BOT_TOKEN");
  const chatId = readEnv("TELEGRAM_CHAT_ID");

  if (!token || !chatId) {
    return { ok: false, error: { code: "not_configured" } };
  }

  let response: Response;

  try {
    response = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: parseChatId(chatId),
        text,
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch (cause) {
    return { ok: false, error: { code: "network_error", cause } };
  }

  const body = await response.text();

  if (!response.ok) {
    return {
      ok: false,
      error: {
        code: "telegram_error",
        status: response.status,
        body,
        description: parseTelegramApiError(body),
      },
    };
  }

  return { ok: true };
}

export function escapeTelegramText(value: string): string {
  return value.replace(/[<>&]/g, (char) => {
    switch (char) {
      case "<":
        return "‹";
      case ">":
        return "›";
      case "&":
        return "+";
      default:
        return char;
    }
  });
}
