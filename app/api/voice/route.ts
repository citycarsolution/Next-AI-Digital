import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {

  try {

    const { text } =
      await req.json();

    // 🔥 CLEAN TEXT
    const cleanText =
      text

        // REMOVE MARKDOWN
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/#/g, "")
        .replace(/```/g, "")
        .replace(/`/g, "")

        // REMOVE EMOJIS
        .replace(
          /[\u{1F600}-\u{1F64F}]/gu,
          ""
        )

        .replace(
          /[\u{1F300}-\u{1F5FF}]/gu,
          ""
        )

        .replace(
          /[\u{1F680}-\u{1F6FF}]/gu,
          ""
        )

        .replace(
          /[\u{2600}-\u{26FF}]/gu,
          ""
        )

        .replace(
          /[\u{2700}-\u{27BF}]/gu,
          ""
        )

        // REMOVE INVALID UTF
        .replace(
          /[\uD800-\uDFFF]/g,
          ""
        )

        // CLEAN EXTRA SYMBOLS
        .replace(
          /[^\x00-\x7F\u0900-\u097F\s.,!?₹()-]/g,
          ""
        )

        // REMOVE NEWLINES
        .replace(/\n/g, " ")

        // REMOVE EXTRA SPACES
        .replace(/\s+/g, " ")

        .trim();

    // 🔥 CARTESIA API
    const response =
      await fetch(
        "https://api.cartesia.ai/tts/bytes",
        {
          method: "POST",

       headers: {
  "Content-Type":
    "application/json",

  "X-API-Key":
    process.env
      .CARTESIA_API_KEY || "",

  "Cartesia-Version":
    "2026-03-01",
},

          body:
            JSON.stringify({
              model_id:
                "sonic-2",

              transcript:
                cleanText,

              voice: {
                mode: "id",

                id:
                  "faf0731e-dfb9-4cfc-8119-259a79b27e12"
              },

              output_format: {
  container: "wav",

  encoding:
    "pcm_f32le",

  sample_rate:
    44100
}
            }),
        }
      );

    // 🔥 ERROR CHECK
    if (!response.ok) {

      const errorText =
        await response.text();

      console.log(
        "CARTESIA ERROR:",
        errorText
      );

      throw new Error(
        "Cartesia Failed"
      );
    }

    // 🔥 RETURN AUDIO
    return new Response(
      response.body,
      {
        headers: {
          "Content-Type":
            "audio/mpeg",

          "Cache-Control":
            "no-cache",
        },
      }
    );

  } catch (
    error
  ) {

    console.log(
      "VOICE ERROR:",
      error
    );

    return new Response(
      "Voice Error",
      {
        status: 500,
      }
    );
  }
}