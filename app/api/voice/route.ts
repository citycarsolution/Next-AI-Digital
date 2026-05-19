import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {

  try {

    const { text } =
      await req.json();

    const response =
      await fetch(
        "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL",
        {
          method: "POST",

          headers: {
            "xi-api-key":
              process.env
                .ELEVENLABS_API_KEY || "",

            "Content-Type":
              "application/json",

            Accept:
              "audio/mpeg",
          },

          body:
            JSON.stringify({
              text,

              model_id:
                "eleven_multilingual_v2",

              voice_settings: {
                stability: 0.4,
                similarity_boost: 0.9,
                style: 0.7,
                use_speaker_boost: true,
              },
            }),
        }
      );

    // 🔥 REAL ERROR LOG
    if (!response.ok) {

      const errorText =
        await response.text();

      console.log(
        "ELEVENLABS ERROR:",
        errorText
      );

      throw new Error(
        "ElevenLabs Failed"
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