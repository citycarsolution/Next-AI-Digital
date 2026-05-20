import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    // 🔥 USER MESSAGE
    const userText =
      body.message || "";

    // 🔥 EXTRACT DATA
    const phone =
      userText.match(/\d{10,13}/)?.[0] ||
      "Not provided";

    const email =
      userText.match(
        /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
      )?.[0] ||
      "Not provided";

    // 🔥 TELEGRAM MESSAGE
    const message = `
🔥 FINAL QUALIFIED LEAD

👤 Client Details:
${userText}

📱 Mobile:
${phone}

📧 Gmail:
${email}

🤖 AI Conversation Summary:
${body.aiReply || "No AI reply"}

✅ Interested Client
`;

    // 🔥 TELEGRAM API
    const telegramUrl =
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    // 🔥 SEND TELEGRAM MESSAGE
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