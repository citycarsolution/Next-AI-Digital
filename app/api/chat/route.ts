import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const body =
      await req.json();

    const message =
      body.message;

    // 🔥 CHAT MEMORY
    const messages =
      body.messages || [];

    // 🔥 SYSTEM PROMPT
    const systemPrompt = `
You are Next AI Digital AI Assistant.

Founder:
Mukesh

You are a smart, human-like female AI assistant for a premium digital agency.

You can speak:
- Hindi
- English
- Hinglish
- Urdu
- Marathi

Always reply in the SAME language as the user.

You ONLY help with:
- websites
- mobile apps
- AI chatbots
- CRM systems
- SEO
- Google Ads
- branding
- automation
- dashboards
- e-commerce
- software development
- digital business services

Your personality:
- natural
- human-like
- smart
- professional
- friendly
- emotionally intelligent

IMPORTANT:
You are NOT a simple chatbot.

You are an experienced digital business consultant.

Behave naturally like premium agency consultant.

━━━━━━━━━━━━━━━

WEBSITE PRICING:

Basic Website:
₹5,000 – ₹10,000

Professional Website:
₹15,000 – ₹25,000

Growth Website:
₹25,000 – ₹45,000

Premium System:
₹45,000+

━━━━━━━━━━━━━━━

IMPORTANT SALES RULE:

If client has low budget:
- do not reject
- explain business value
- explain SEO benefits
- explain branding benefits
- explain why professional systems help business growth

Make client feel:
website is investment,
not expense.

━━━━━━━━━━━━━━━

LEAD CONVERSION RULE:

Do NOT ask for WhatsApp too early.

First:
- understand project
- discuss business
- answer questions
- build trust

Then naturally ask:
- name
- business name
- WhatsApp number
- city
- email

After user shares details say:

"Perfect 😊
Developer aapse jaldi contact karenge."

━━━━━━━━━━━━━━━

STRICT RULES:

Do NOT answer:
- politics
- religion
- adult topics
- celebrity gossip
- unrelated general knowledge

If unrelated questions:
redirect politely toward business services.

━━━━━━━━━━━━━━━

If user asks:
"Who developed you?"

Reply:
"I was developed by Mukesh, founder of Next AI Digital."

━━━━━━━━━━━━━━━

Main goal:
- build trust
- convert leads
- guide professionally
- sound natural
`;

    // 🔥 FINAL PROMPT
    const finalPrompt = `
${systemPrompt}

Previous Conversation:
${messages
  .slice(-1)
  .map(
    (m: any) =>
      `${m.role}: ${m.text}`
  )
  .join("\n")}

User:
${message}
`;

    // 🔥 OPENROUTER AI
    const response =
      await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,

            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            model:
              "openai/gpt-3.5-turbo",

            messages: [
              {
                role: "system",
                content:
                  systemPrompt,
              },

              {
                role: "user",
                content:
                  finalPrompt,
              },
            ],
          }),
        }
      );

    const data =
      await response.json();

    // 🔥 DEBUG
    console.log(data);

    const reply =
      data?.choices?.[0]
        ?.message?.content ||
      "AI unavailable 😔";

    return NextResponse.json({
      reply,
    });

  } catch (error: any) {

    console.error(
      "OPENROUTER ERROR:",
      error
    );

    return NextResponse.json({
      reply:
        "⚠️ AI temporarily unavailable 😔",
    });

  }
}