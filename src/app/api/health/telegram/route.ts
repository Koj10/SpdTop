import { NextResponse } from "next/server";
import { telegramGetMe } from "@/lib/telegram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const tokenSet = Boolean(process.env.TELEGRAM_BOT_TOKEN?.trim());
  const chatIdSet = Boolean(process.env.TELEGRAM_CHAT_ID?.trim());

  if (!tokenSet || !chatIdSet) {
    return NextResponse.json({
      ok: false,
      configured: false,
      tokenSet,
      chatIdSet,
      hint: "Create .env next to docker-compose.yml with no leading spaces before variable names.",
    });
  }

  const result = await telegramGetMe();

  if (!result.ok) {
    switch (result.error.code) {
      case "network_error":
        return NextResponse.json({
          ok: false,
          configured: true,
          networkError: true,
          hint: "Server cannot reach api.telegram.org. Add TELEGRAM_API_URL proxy to .env or open outbound HTTPS.",
        });
      case "not_configured":
        return NextResponse.json({
          ok: false,
          configured: false,
          hint: "TELEGRAM_BOT_TOKEN is missing or empty.",
        });
      case "telegram_error":
        return NextResponse.json({
          ok: false,
          configured: true,
          telegramError: true,
          detail: result.error.description ?? "Invalid bot token",
        });
    }
  }

  return NextResponse.json({
    ok: true,
    configured: true,
    bot: result.username ?? null,
    chatIdSet,
  });
}
