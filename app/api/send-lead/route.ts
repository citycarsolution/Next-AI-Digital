import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const message =
      `
🔥 NEW CLIENT LEAD

👤 Name:
${body.name}

📱 Phone:
${body.phone}

🌆 City:
${body.city}

💼 Business:
${body.business}

💰 Budget:
${body.budget}

🧠 Requirement:
${body.requirement}
`;

    const telegramUrl =
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

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

    return NextResponse.json({
      success: true,
    });

  } catch (
    error
  ) {

    console.log(
      error
    );

    return NextResponse.json({
      success: false,
    });
  }
}