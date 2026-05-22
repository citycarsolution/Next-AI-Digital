import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    // ==============================
    // BODY
    // ==============================

    const body =
      await req.json();

    const text =
      body?.text || "";

    // ==============================
    // EMPTY CHECK
    // ==============================

    if (!text.trim()) {

      return NextResponse.json({
        success: false,
        error: "No text",
      });
    }

    // ==============================
    // CLEAN TEXT
    // ==============================

    const cleanText =
      text
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/#/g, "")
        .replace(/```/g, "")
        .replace(/`/g, "")
        .replace(/\n/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    // ==============================
    // SHORT TEXT
    // ==============================

    const shortText =
      cleanText
        .split(".")
        .slice(0, 3)
        .join(".");

    // ==============================
    // CARTESIA API
    // ==============================

    const response =
      await fetch(

        "https://api.cartesia.ai/tts/bytes",

        {
          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

            "Cartesia-Version":
              "2024-06-10",

            "X-API-Key":
              process.env.CARTESIA_API_KEY!,
          },

          body:
            JSON.stringify({

             model_id:
  "sonic-3.5",

              transcript:
                shortText,

              voice: {
                mode: "id",
                id: "faf0731e-dfb9-4cfc-8119-259a79b27e12",
              },

              output_format: {
                container: "mp3",
                encoding: "mp3",
                sample_rate: 44100,
              },
            }),
        }
      );

    // ==============================
    // ERROR
    // ==============================

    if (!response.ok) {

      const errorText =
        await response.text();

      console.log(
        "CARTESIA ERROR:",
        errorText
      );

      return NextResponse.json({
        success: false,
        error:
          "Voice server busy 😔",
      });
    }

    // ==============================
    // AUDIO
    // ==============================

    const audioBuffer =
      await response.arrayBuffer();

    // ==============================
    // RETURN AUDIO
    // ==============================

    return new Response(
      audioBuffer,

      {
        headers: {
          "Content-Type":
            "audio/mpeg",
        },
      }
    );

  } catch (error) {

    console.log(
      "VOICE ERROR:",
      error
    );

    return NextResponse.json({
      success: false,
      error:
        "Voice unavailable 😔",
    });
  }
}