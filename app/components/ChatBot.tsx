"use client";

import { useState, useEffect } from "react";

export default function ChatBot() {

  let currentAudio:
  HTMLAudioElement | null =
    null;


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

  const [isMobile, setIsMobile] =
    useState(false);

  // 🔥 MOBILE DETECT
  useEffect(() => {

    const checkMobile =
      () => {

        setIsMobile(
          window.innerWidth <=
            768
        );
      };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkMobile
      );

  }, []);

  // 🔥 PREMIUM VOICE
  const speak = async (
    text: string
  ) => {

    try {

      const cleanText =
        text
          .replace(/\*\*/g, "")
          .replace(/\*/g, "")
          .replace(/#/g, "")
          .replace(/```/g, "")
          .replace(/`/g, "")
          .replace(/\n/g, " ")
          .replace(
            /[🚀😍🔥💡📱💰🎯]/g,
            ""
          )
          .trim();

      const res =
        await fetch(
          "/api/voice",
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                text:
                  cleanText,
              }),
          }
        );

      if (!res.ok) {

        console.log(
          "VOICE API FAILED"
        );

        return;
      }

      const audioBlob =
        await res.blob();

      const audioUrl =
        URL.createObjectURL(
          audioBlob
        );

      const audio =
  new Audio(
    audioUrl
  );

if (currentAudio) {

  currentAudio.pause();

  currentAudio.currentTime = 0;
}

currentAudio = audio;

audio.volume = 1;

audio.muted = false;

      try {

        await audio.play();

        console.log(
          "VOICE PLAYING 😍"
        );

      } catch (err) {

        console.log(
          "AUDIO PLAY ERROR:",
          err
        );
      }

    } catch (
      error
    ) {

      console.log(
        "VOICE ERROR:",
        error
      );
    }
  };

  // 🔥 AUTO WELCOME
  useEffect(() => {

    let welcomed = false;

    const startWelcome =
      async () => {

        if (welcomed)
          return;

        welcomed = true;

        try {

          setTimeout(() => {

            speak(
              "Welcome to Next AI Digital. How can I help you today?"
            );

          }, 1200);

        } catch (
          error
        ) {

          console.log(
            "WELCOME ERROR:",
            error
          );
        }
      };

    // 🔥 MOBILE
    document.addEventListener(
      "touchstart",
      startWelcome,
      { once: true }
    );

    // 🔥 DESKTOP
    document.addEventListener(
      "mousemove",
      startWelcome,
      { once: true }
    );

    // 🔥 CLICK
    document.addEventListener(
      "click",
      startWelcome,
      { once: true }
    );

    return () => {

      document.removeEventListener(
        "touchstart",
        startWelcome
      );

      document.removeEventListener(
        "mousemove",
        startWelcome
      );

      document.removeEventListener(
        "click",
        startWelcome
      );
    };

  }, []);

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

    // 🔥 SHOW USER MESSAGE
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

        // 🔥 AUTO LEAD SEND

if (

  reply.includes(
    "Developer"
  ) ||

  reply.includes(
    "contact"
  )

) {

  await fetch(
    "/api/send-lead",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body:
        JSON.stringify({
          name: msg,
          phone: msg,
          city: msg,
          business: msg,
          budget: msg,
          requirement: msg,
        }),
    }
  );
}

      const botMsg = {
        role: "bot",
        text: reply,
      };

      // 🔥 START VOICE FIRST
      speak(reply);

      // 🔥 SHOW TEXT WHILE SPEAKING
      setTimeout(() => {

        setMessages([
          ...newMessages,
          botMsg,
        ]);

      }, 100);

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
        
  // 🎤 VOICE INPUT
  const startListening =
    () => {

      const SpeechRecognition =
        (
          window as any
        )
          .SpeechRecognition ||

        (
          window as any
        )
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

      recognition.lang =
        navigator.language ||
        "en-US";

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
            "Sorry, please try again."
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
        className={`
          fixed
          z-50
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          text-white
          rounded-full
          shadow-2xl
          hover:scale-105
          transition-all
          animate-pulse
          ${
            isMobile
              ? "bottom-4 right-4 p-3 text-lg"
              : "bottom-6 right-6 p-4 text-xl"
          }
        `}
      >
        💬
      </button>

      {/* CHAT BOX */}
      {open && (

        <div
          className={`
            fixed
            z-50
            bg-[#0f172a]/95
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            shadow-2xl
            flex
            flex-col
            overflow-hidden
            ${
              isMobile
                ? "bottom-16 right-3 left-3 h-[70vh]"
                : "bottom-20 right-6 w-[310px] h-[500px]"
            }
          `}
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
              className="text-white text-lg"
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
                    className={`px-4 py-3 rounded-2xl text-sm max-w-[85%] whitespace-pre-wrap ${
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
                focus:border-blue-500
              "
            />

            {/* BUTTONS */}
            <div className="flex gap-2">

              <button
                onClick={() =>
                  sendMessage()
                }
                className="
                  flex-1
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  py-3
                  rounded-xl
                  text-white
                  font-semibold
                  hover:scale-[1.02]
                  transition-all
                "
              >
                Send 🚀
              </button>

              <button
                onClick={
                  startListening
                }
                className="
                  flex-1
                  bg-black/40
                  py-3
                  rounded-xl
                  text-white
                  border
                  border-white/10
                  hover:border-blue-500/50
                "
              >
                🎤 Speak
              </button>

            </div>

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
                hover:text-green-300
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