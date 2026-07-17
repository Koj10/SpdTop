const TELEGRAM_API = process.env.TELEGRAM_API_URL ?? "https://api.telegram.org";
const REQUEST_TIMEOUT_MS = 25_000;

export type TelegramSendError =
  | { code: "not_configured" }
  | { code: "network_error"; cause?: unknown }
  | { code: "telegram_error"; status: number; body: string };

export type TelegramSendResult =
  | { ok: true }
  | { ok: false; error: TelegramSendError };

export async function sendTelegramMessage(text: string): Promise<TelegramSendResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    return { ok: false, error: { code: "not_configured" } };
  }

  let response: Response;

  try {
    response = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch (cause) {
    return { ok: false, error: { code: "network_error", cause } };
  }

  if (!response.ok) {
    const body = await response.text();
    return { ok: false, error: { code: "telegram_error", status: response.status, body } };
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
