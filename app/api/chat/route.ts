import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    // ==============================
    // BODY
    // ==============================

    const {
      message,
      messages,
    } = await req.json();

    // ==============================
    // SYSTEM PROMPT
    // ==============================

    const systemPrompt = `
You are Next AI Digital Assistant.

Founder: Mukesh.

You are a smart, human-like female AI consultant for a premium digital agency.

Languages:
- Hindi
- English
- Hinglish
- Urdu
- Marathi

Reply naturally in the user's language.

You ONLY help with:
- websites
- mobile apps
- AI chatbots
- CRM systems
- SEO
- branding
- automation
- dashboards
- e-commerce
- software development

Your personality:
- smart
- professional
- friendly
- premium
- human-like

Your goal:
- understand business needs
- explain features professionally
- explain pricing realistically
- build trust naturally
- convert leads

Pricing:
- Basic Website: ₹5k–10k
- Professional Website: ₹15k–25k
- Growth Website: ₹25k–45k
- Premium Systems: ₹45k+

IMPORTANT:
Do NOT instantly ask for contact details.

First:
- discuss business
- explain features
- explain branding value
- explain automation benefits
- answer questions naturally

Only AFTER proper discussion,
generate:

FINAL PROJECT SUMMARY:
- Name
- Mobile Number
- Gmail
- City
- Business Name
- Service Type
- Budget
- Final Requirements

Then say:
"Perfect 😊 Developer aapse jaldi contact karenge."

Keep replies:
- short
- smart
- premium
- conversational

If user asks:
"Who developed you?"

Reply:
"I was developed by Mukesh, founder of Next AI Digital."
`;

    // ==============================
    // RECENT MESSAGES
    // ==============================

    const recentMessages =
      messages
        ?.slice(-6)
        ?.map((m: any) => ({
          role: m.role || "user",
          content:
            m.text ||
            m.content ||
            "",
        }))
        ?.filter((m: any) => m.content) || [];

    // ==============================
    // TIMEOUT
    // ==============================

    const controller =
      new AbortController();

    const timeout =
      setTimeout(() => {
        controller.abort();
      }, 15000);

    // ==============================
    // OPENROUTER API
    // ==============================

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        signal: controller.signal,

        headers: {
          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type":
            "application/json",

          "HTTP-Referer":
            "http://localhost:3000",

          "X-Title":
            "Next AI Digital",
        },

        body: JSON.stringify({

          // 🔥 BEST FAST MODEL
          model:
            "google/gemini-2.0-flash-lite-001",

          max_tokens: 250,

          temperature: 0.7,

          top_p: 0.9,

          frequency_penalty: 0.2,

          presence_penalty: 0.2,

          messages: [

            {
              role: "system",
              content: systemPrompt,
            },

            ...recentMessages,

            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    clearTimeout(timeout);

    // ==============================
    // RESPONSE
    // ==============================

    const data =
      await response.json();

    console.log(
      "STATUS:",
      response.status
    );

    console.log(
      "FULL RESPONSE:",
      JSON.stringify(
        data,
        null,
        2
      )
    );

    // ==============================
    // SAFE REPLY EXTRACT
    // ==============================

    const reply =
      data?.choices?.[0]
        ?.message?.content ||

      data?.choices?.[0]
        ?.text ||

      "";

    console.log(
      "AI REPLY:",
      reply
    );

    // ==============================
    // EMPTY REPLY
    // ==============================

    if (!reply) {

      return NextResponse.json({
        reply:
          "AI reply empty aa raha hai 😔",
      });
    }

    // ==============================
    // SUCCESS
    // ==============================

    return NextResponse.json({
      reply,
    });

  } catch (error: any) {

    console.log(
      "CHAT ERROR:",
      error
    );

    // ==============================
    // TIMEOUT ERROR
    // ==============================

    if (
      error?.name ===
      "AbortError"
    ) {

      return NextResponse.json({
        reply:
          "Request timeout 😔 Please retry.",
      });
    }

    // ==============================
    // DEFAULT ERROR
    // ==============================

    return NextResponse.json({
      reply:
        "AI unavailable 😔",
    });
  }
}