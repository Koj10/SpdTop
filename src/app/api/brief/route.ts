import { NextResponse } from "next/server";
import { escapeTelegramText, sendTelegramMessage } from "@/lib/telegram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type BriefPayload = {
  name?: string;
  contact?: string;
  message?: string;
  locale?: string;
  website?: string;
};

function trim(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function telegramErrorResponse(error: {
  code: string;
  cause?: unknown;
  status?: number;
  body?: string;
  description?: string;
}) {
  switch (error.code) {
    case "not_configured":
      console.error("[brief] Telegram env vars missing on server");
      return NextResponse.json(
        { error: "not_configured", detail: "Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env" },
        { status: 503 },
      );
    case "network_error":
      console.error("[brief] Telegram network error:", error.cause);
      return NextResponse.json(
        {
          error: "network_error",
          detail: "Server cannot reach Telegram API. Check firewall or set TELEGRAM_API_URL proxy.",
        },
        { status: 502 },
      );
    case "telegram_error":
      console.error("[brief] Telegram API error:", error.status, error.body);
      return NextResponse.json(
        {
          error: "telegram_error",
          detail:
            error.description ??
            "Telegram rejected the message. Check bot token, chat ID, and that the bot is in the group.",
        },
        { status: 502 },
      );
    default:
      return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BriefPayload;

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = trim(body.name, 120);
    const contact = trim(body.contact, 160);
    const message = trim(body.message, 2000);
    const locale = trim(body.locale, 8) || "en";

    if (!name || !contact || !message) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    if (name.length < 2 || message.length < 10) {
      return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
    }

    const localeLabel = locale === "ru" ? "RU" : "EN";
    const text = [
      "New brief · SpdTop website",
      "",
      `Locale: ${localeLabel}`,
      `Name: ${escapeTelegramText(name)}`,
      `Contact: ${escapeTelegramText(contact)}`,
      "",
      "Project:",
      escapeTelegramText(message),
    ].join("\n");

    const result = await sendTelegramMessage(text);

    if (!result.ok) {
      return telegramErrorResponse(result.error);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[brief]", error);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
