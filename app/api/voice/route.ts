import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const response = await fetch(
      "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL/stream",
      {
        method: "POST",

        headers: {
          "xi-api-key":
            process.env
              .ELEVENLABS_API_KEY || "",

          "Content-Type":
            "application/json",

          Accept: "audio/mpeg",
        },

        body: JSON.stringify({
          text,

          model_id:
            "eleven_multilingual_v2",

          voice_settings: {
            stability: 0.5,

            similarity_boost: 0.8,

            style: 0.7,

            use_speaker_boost: true,
          },
        }),
      }
    );

    if (!response.ok) {
      console.log(
        "ElevenLabs Error"
      );

      return NextResponse.json({
        error:
          "Voice API failed",
      });
    }

    // 🔥 stream audio
    return new Response(
      response.body,
      {
        
        headers: {
  "Content-Type":
    "audio/mpeg",

  "Transfer-Encoding":
    "chunked",

  "Cache-Control":
    "no-cache",
},
      }
    );

  } catch (error) {
    console.log(
      "VOICE ERROR:",
      error
    );

    return NextResponse.json({
      error: "Voice error",
    });
  }
}