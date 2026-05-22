import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    // ==============================
    // BODY
    // ==============================

    const body =
      await req.json();

    const message =
      body?.message || "";

    const messages =
      body?.messages || [];

    // ==============================
    // EMPTY MESSAGE
    // ==============================

    if (!message.trim()) {

      return NextResponse.json({
        reply:
          "Please enter a message 😊",
      });
    }

    // ==============================
    // SYSTEM PROMPT
    // ==============================

    const systemPrompt = `
You are Next AI Digital Assistant.

Founder: Mukesh.

You are a smart, premium, human-like female AI business consultant for a premium corporate digital agency.

━━━━━━━━━━━━━━━

LANGUAGES:

You naturally speak:
- Hindi
- English
- Hinglish
- Urdu
- Marathi

Always reply naturally in the user's language.

Do NOT translate replies into multiple languages.

Reply only in the language the user is using.

If the user speaks English:
reply only in English.

If the user speaks Hindi:
reply only in Hindi/Hinglish naturally.

Avoid unnecessary translations in brackets.

━━━━━━━━━━━━━━━

YOU HELP WITH:

- websites
- web applications
- mobile applications
- AI automation
- CRM systems
- dashboards
- SEO
- branding
- digital marketing
- Google Ads
- social media marketing
- lead generation
- WhatsApp automation
- AI chatbots
- software development

Politely avoid unrelated topics.

━━━━━━━━━━━━━━━

YOUR PERSONALITY:

- smart
- premium
- professional
- confident
- emotionally intelligent
- human-like
- business-focused

Behave like:
- premium business consultant
- corporate digital strategist
- experienced sales closer

NOT:
- robotic chatbot
- support agent

━━━━━━━━━━━━━━━

IMPORTANT RULES:

- Keep replies short
- Keep replies premium
- Explain professionally
- Avoid robotic replies
- Avoid huge paragraphs
- Sound confident
- Build trust naturally

━━━━━━━━━━━━━━━

PRICING & TIMELINES:

Basic Website:
₹5k–10k
Timeline:
24 hours

Professional Website:
₹10k–25k
Timeline:
1–3 days

Growth Website:
₹25k–45k
Timeline:
5–10 days

Premium Systems:
₹45k+

━━━━━━━━━━━━━━━

IMPORTANT CONTACT RULE:

Do NOT instantly ask:
- phone number
- Gmail
- city

First:
- discuss project
- explain features
- explain pricing
- explain timelines
- build trust

━━━━━━━━━━━━━━━

FINAL PROJECT SUMMARY:

Only AFTER proper conversation generate:

- Name
- Mobile Number
- Gmail
- City
- Business Name
- Service Type
- Budget
- Timeline
- Final Requirements

Then say:

"Perfect 😊
Developer aapse jaldi contact karenge."

━━━━━━━━━━━━━━━

STRICT RULES:

Do NOT answer:
- politics
- religion
- adult topics
- celebrity gossip

Politely redirect toward business services.

━━━━━━━━━━━━━━━

If user asks:
"Who developed you?"

Reply:
"I was developed by Mukesh, founder of Next AI Digital."

━━━━━━━━━━━━━━━

MAIN GOAL:

- build trust
- create premium impression
- emotionally engage users
- convert quality leads
`;

    // ==============================
    // RECENT MESSAGES
    // ==============================

    const recentMessages =

      messages
        ?.slice(-4)

        ?.map((m: any) => ({
          role:
            m.role === "bot"
              ? "assistant"
              : "user",

          content:
            m.text ||
            m.content ||
            "",
        }))

        || [];

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
    // GROQ API
    // ==============================

    const response =
      await fetch(

        "https://api.groq.com/openai/v1/chat/completions",

        {
          method: "POST",

          signal:
            controller.signal,

          headers: {

            Authorization:
              `Bearer ${process.env.GROQ_API_KEY}`,

            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify({

              model:
                "llama-3.3-70b-versatile",

              messages: [

                {
                  role: "system",
                  content:
                    systemPrompt,
                },

                ...recentMessages,

                {
                  role: "user",
                  content:
                    message,
                },
              ],

              temperature:
                0.7,

              max_tokens:
                220,
            }),
        }
      );

    // ==============================
    // CLEAR TIMEOUT
    // ==============================

    clearTimeout(timeout);

    // ==============================
    // API ERROR
    // ==============================

    if (!response.ok) {

      const errorText =
        await response.text();

      console.log(
        "GROQ ERROR:",
        errorText
      );

      return NextResponse.json({
        reply:
          "Server busy hai 😔 Please thodi der baad try kare.",
      });
    }

    // ==============================
    // RESPONSE DATA
    // ==============================

    const data =
      await response.json();

    console.log(
      "GROQ RESPONSE:",
      JSON.stringify(
        data,
        null,
        2
      )
    );

    // ==============================
    // SAFE REPLY
    // ==============================

    const reply =

      data?.choices?.[0]
        ?.message?.content
        ?.trim()

      || "";

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
          "AI unavailable 😔",
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