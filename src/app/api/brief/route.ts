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
      switch (result.error.code) {
        case "not_configured":
          console.error("[brief] Telegram env vars missing on server");
          return NextResponse.json({ error: "not_configured" }, { status: 503 });
        case "network_error":
          console.error("[brief] Telegram network error:", result.error.cause);
          return NextResponse.json({ error: "network_error" }, { status: 502 });
        case "telegram_error":
          console.error(
            "[brief] Telegram API error:",
            result.error.status,
            result.error.body,
          );
          return NextResponse.json({ error: "telegram_error" }, { status: 502 });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[brief]", error);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
