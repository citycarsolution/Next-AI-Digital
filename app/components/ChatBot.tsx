"use client";

import { useState, useEffect } from "react";

export default function ChatBot() {

  const [open, setOpen] =
    useState(true);

  const [messages, setMessages] =
    useState([
      {
        role: "bot",
        text:
          "Welcome 👋 How can I help you?",
      },
    ]);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [voices, setVoices] =
    useState<
      SpeechSynthesisVoice[]
    >([]);

  // 🔥 LOAD VOICES
  useEffect(() => {

    const synth =
      window.speechSynthesis;

    const loadVoices =
      () => {

        setVoices(
          synth.getVoices()
        );
      };

    loadVoices();

    speechSynthesis.onvoiceschanged =
      loadVoices;

  }, []);

  // 🔥 AUTO WELCOME
  useEffect(() => {

    if (
      voices.length > 0
    ) {

      setTimeout(() => {

        speak(
          "Welcome to Next AI Digital. How can I help you today?"
        );

      }, 1000);
    }

  }, [voices]);

  // 🔊 PREMIUM VOICE
  const speak = (
    text: string
  ) => {

    const synth =
      window.speechSynthesis;

    if (!synth) return;

    // 🔥 STOP OLD VOICE
    synth.cancel();

    // 🔥 CLEAN TEXT
    const cleanText =
      text
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/#/g, "")
        .replace(/```/g, "")
        .replace(/`/g, "")
        .replace(/\n/g, " ")
        .trim();

    const utter =
      new SpeechSynthesisUtterance(
        cleanText
      );

    // 🔥 LANGUAGE DETECT
    const isHindi =
      /[ऀ-ॿ]/.test(
        cleanText
      );

    let voice;

    if (isHindi) {

      voice =
        voices.find(
          (v) =>
            v.lang.includes(
              "hi"
            )
        ) || voices[0];

    } else {

      voice =
        voices.find(
          (v) =>
            v.name.includes(
              "Google UK English Female"
            )
        ) ||

        voices.find(
          (v) =>
            v.name.includes(
              "Microsoft Zira"
            )
        ) ||

        voices[0];
    }

    if (voice) {

      utter.voice =
        voice;

      utter.lang =
        voice.lang;
    }

    // 🔥 PREMIUM MOBILE SETTINGS
    utter.rate = 0.88;

    utter.pitch = 1;

    utter.volume = 1;

    setTimeout(() => {

      synth.speak(
        utter
      );

    }, 150);
  };

  // 💬 SEND MESSAGE
  const sendMessage =
    async (
      customText?: string
    ) => {

      const msg =
        customText ||
        input;

      if (
        !msg.trim()
      ) return;

      const userMsg = {
        role: "user",
        text: msg,
      };

      const newMessages = [
        ...messages,
        userMsg,
      ];

      setMessages(
        newMessages
      );

      setInput("");

      setLoading(true);

      try {

        const res =
          await fetch(
            "/api/chat",
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                "application/json",
              },

              body:
                JSON.stringify({
                  message:
                    msg,

                  messages:
                    newMessages,
                }),
            }
          );

        const data =
          await res.json();

        const reply =
          data.reply ||
          "AI unavailable 😔";

        const botMsg = {
          role: "bot",
          text: reply,
        };

        setMessages([
          ...newMessages,
          botMsg,
        ]);

        // 🔥 SPEAK AI
        speak(reply);

      } catch {

        setMessages([
          ...newMessages,
          {
            role: "bot",
            text:
              "⚠️ AI server busy 😔",
          },
        ]);
      }

      setLoading(false);
    };

  // 🎤 PREMIUM MOBILE MIC
  const startListening =
    () => {

      const SpeechRecognition =
        (window as any)
          .SpeechRecognition ||

        (window as any)
          .webkitSpeechRecognition;

      if (
        !SpeechRecognition
      ) {

        alert(
          "Please use Chrome Browser 😄"
        );

        return;
      }

      const recognition =
        new SpeechRecognition();

      // 🔥 BEST LANGUAGE
      recognition.lang =
        "hi-IN";

      recognition.continuous =
        false;

      recognition.interimResults =
        false;

      recognition.maxAlternatives =
        1;

      recognition.start();

      setLoading(true);

      recognition.onstart =
        () => {

          console.log(
            "🎤 Listening..."
          );
        };

      recognition.onresult =
        async (
          event: any
        ) => {

          const text =
            event.results[0][0]
              .transcript;

          console.log(
            "USER:",
            text
          );

          // 🔥 AUTO SEND
          await sendMessage(
            text
          );
        };

      recognition.onerror =
        (
          event: any
        ) => {

          console.log(
            "VOICE ERROR:",
            event.error
          );

          setLoading(
            false
          );

          speak(
            "Sorry 😔 Voice clear nahi aayi. Please dubara boliye."
          );
        };

      recognition.onend =
        () => {

          setLoading(
            false
          );

          console.log(
            "🎤 Voice Ended"
          );
        };
    };

  return (
    <>

      {/* FLOAT BUTTON */}
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          fixed
          bottom-6
          right-6
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          text-white
          px-4
          py-3
          rounded-full
          shadow-2xl
          z-50
          hover:scale-105
          transition-all
          animate-pulse
        "
      >
        💬
      </button>

      {/* CHAT */}
      {open && (

        <div
          className="
            fixed
            bottom-20
            right-6
            w-[340px]
            h-[520px]
            bg-[#0f172a]/95
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            shadow-2xl
            flex
            flex-col
            overflow-hidden
            z-50
          "
        >

          {/* HEADER */}
          <div
            className="
              p-4
              bg-gradient-to-r
              from-blue-500/20
              to-purple-500/20
              border-b
              border-white/10
              flex
              items-center
              justify-between
            "
          >

            <div>

              <h2 className="text-white font-bold text-lg">
                Next AI Digital 🤖
              </h2>

              <p className="text-green-400 text-xs">
                ● AI Consultant
              </p>

            </div>

            <button
              onClick={() =>
                setOpen(false)
              }
              className="text-white"
            >
              ✕
            </button>

          </div>

          {/* MESSAGES */}
          <div
            className="
              flex-1
              overflow-y-auto
              p-4
              space-y-3
              bg-[#020617]
            "
          >

            {messages.map(
              (
                m: any,
                i
              ) => (

                <div
                  key={i}
                  className={`flex ${
                    m.role ===
                    "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm transition-all duration-300 ${
                      m.role ===
                      "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-md"
                        : "bg-white/10 text-white rounded-bl-md border border-blue-500/20"
                    }`}
                  >
                    {m.text}
                  </div>

                </div>
              )
            )}

            {/* LOADING */}
            {loading && (

              <div className="flex gap-1">

                <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>

                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></span>

                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>

              </div>
            )}

          </div>

          {/* INPUT */}
          <div
            className="
              p-3
              border-t
              border-white/10
              bg-[#0f172a]
            "
          >

            <input
              value={input}
              onChange={(e) =>
                setInput(
                  e.target.value
                )
              }
              onKeyDown={(
                e
              ) => {

                if (
                  e.key ===
                  "Enter"
                ) {

                  sendMessage();
                }
              }}
              placeholder="Type message..."
              className="
                w-full
                p-3
                rounded-xl
                bg-black/40
                text-white
                mb-3
                outline-none
                border
                border-white/10
              "
            />

            {/* SEND */}
            <button
              onClick={() =>
                sendMessage()
              }
              className="
                w-full
                bg-gradient-to-r
                from-blue-500
                to-purple-500
                py-3
                rounded-xl
                text-white
                font-semibold
              "
            >
              Send 🚀
            </button>

            {/* MIC */}
            <button
              onClick={
                startListening
              }
              className="
                w-full
                mt-2
                bg-black/40
                py-3
                rounded-xl
                text-white
              "
            >
              🎤 Speak
            </button>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919082552031"
              target="_blank"
              className="
                block
                text-center
                mt-3
                text-green-400
                text-sm
              "
            >
              Talk on WhatsApp 🚀
            </a>

          </div>
        </div>
      )}
    </>
  );
}