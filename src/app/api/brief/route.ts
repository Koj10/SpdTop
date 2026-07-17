import { NextResponse } from "next/server";
import { escapeTelegramText, sendTelegramMessage } from "@/lib/telegram";

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
      "🆕 New brief · SpdTop website",
      "",
      `🌐 Locale: ${localeLabel}`,
      `👤 Name: ${escapeTelegramText(name)}`,
      `📱 Contact: ${escapeTelegramText(contact)}`,
      "",
      "📋 Project:",
      escapeTelegramText(message),
    ].join("\n");

    await sendTelegramMessage(text);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[brief]", error);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
