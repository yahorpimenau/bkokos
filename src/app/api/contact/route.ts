import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, services, budget, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Format Telegram message
    const lines = [
      `🔔 *New Lead from bigkokos.dev*`,
      ``,
      `*Name:* ${escapeMarkdown(name)}`,
      `*Email:* ${escapeMarkdown(email)}`,
    ];

    if (company) lines.push(`*Company:* ${escapeMarkdown(company)}`);
    if (services?.length) lines.push(`*Services:* ${escapeMarkdown(services.join(", "))}`);
    if (budget) lines.push(`*Budget:* ${escapeMarkdown(budget)}`);
    if (message) {
      lines.push(``);
      lines.push(`*Message:*`);
      lines.push(escapeMarkdown(message));
    }

    lines.push(``);
    lines.push(`_${new Date().toISOString().replace("T", " ").slice(0, 19)} UTC_`);

    const text = lines.join("\n");

    // Send to Telegram
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const tgRes = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!tgRes.ok) {
        const err = await tgRes.text();
        console.error("Telegram API error:", err);
        return NextResponse.json(
          { error: "Failed to send notification" },
          { status: 502 }
        );
      }
    } else {
      console.warn("Telegram credentials not configured. Lead:", body);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
