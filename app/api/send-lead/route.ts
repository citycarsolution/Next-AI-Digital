import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    // 🔥 TELEGRAM MESSAGE
    const message =
`
🔥 NEW AI LEAD

const message =

👤 CLIENT MESSAGE:
${body.message || body.requirement}

🤖 AI REPLY:
${body.aiReply || "No AI reply"}
`;

    // 🔥 TELEGRAM API URL
    const telegramUrl =
`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    // 🔥 SEND MESSAGE
    await fetch(
      telegramUrl,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify({
            chat_id:
              process.env.TELEGRAM_CHAT_ID,

            text:
              message,
          }),
      }
    );

    console.log(
      "✅ TELEGRAM LEAD SENT"
    );

    return NextResponse.json({
      success: true,
    });

  } catch (
    error
  ) {

    console.log(
      "❌ TELEGRAM ERROR:",
      error
    );

    return NextResponse.json({
      success: false,
    });
  }
}