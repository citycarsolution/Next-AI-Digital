import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    // ==============================
    // BODY
    // ==============================

    const body =
      await req.json();

    // ==============================
    // CLEAN USER MESSAGE
    // ==============================

    const userText =
      (body.message || "")

        // REMOVE MARKDOWN EMAILS
        .replace(
          /\[([^\]]+)\]\(mailto:[^)]+\)/g,
          "$1"
        )

        // REMOVE MARKDOWN
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/#/g, "")
        .replace(/```/g, "")
        .replace(/`/g, "")

        // REMOVE EXTRA SPACES
        .replace(/\s+/g, " ")

        .trim();

    // ==============================
    // CLEAN AI REPLY
    // ==============================

    const aiReply =
      (body.aiReply || "")

        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/#/g, "")
        .replace(/```/g, "")
        .replace(/`/g, "")

        .replace(/\s+/g, " ")

        .trim();

    // ==============================
    // EMPTY CHECK
    // ==============================

    if (!userText) {

      return NextResponse.json({
        success: false,
        error: "Empty message",
      });
    }

    // ==============================
    // EXTRACT PHONE
    // ==============================

    const phone =
      userText.match(
        /\d{10,13}/
      )?.[0] ||

      "Not provided";

    // ==============================
    // EXTRACT EMAIL
    // ==============================

    const email =
      userText.match(
        /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
      )?.[0] ||

      "Not provided";

    // ==============================
    // QUALIFIED LEAD CHECK
    // ==============================

    const hasLead =
      phone !==
        "Not provided" ||

      email !==
        "Not provided";

    // DON'T SEND RANDOM CHATS
    if (!hasLead) {

      return NextResponse.json({
        success: false,
        error:
          "No qualified lead",
      });
    }

    // ==============================
    // TELEGRAM MESSAGE
    // ==============================

    const telegramMessage = `
🔥 FINAL QUALIFIED LEAD

👤 CLIENT MESSAGE:
${userText}

📱 MOBILE:
${phone}

📧 EMAIL:
${email}

🤖 AI RESPONSE:
${aiReply}

✅ Interested Client
`;

    // ==============================
    // TELEGRAM URL
    // ==============================

    const telegramUrl =
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    // ==============================
    // SEND TELEGRAM MESSAGE
    // ==============================

    const telegramResponse =
      await fetch(
        telegramUrl,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            chat_id:
              process.env.TELEGRAM_CHAT_ID,

            text:
              telegramMessage,
          }),
        }
      );

    // ==============================
    // TELEGRAM RESPONSE
    // ==============================

    const telegramData =
      await telegramResponse.json();

    console.log(
      "TELEGRAM RESPONSE:",
      telegramData
    );

    // ==============================
    // TELEGRAM ERROR
    // ==============================

    if (
      !telegramResponse.ok
    ) {

      return NextResponse.json({
        success: false,

        error:
          "Telegram send failed",
      });
    }

    // ==============================
    // SUCCESS
    // ==============================

    console.log(
      "✅ TELEGRAM LEAD SENT"
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(
      "❌ TELEGRAM ERROR:",
      error
    );

    return NextResponse.json({
      success: false,

      error:
        "Server error",
    });
  }
}