import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Next AI Digital | AI Websites, SEO & App Development",

  description:
    "Next AI Digital provides AI websites, mobile apps, SEO, AI chatbots, automation and custom software development services across India.",

  keywords: [
    "AI Website Development",
    "SEO Services",
    "AI Chatbot",
    "Web Development",
    "Mobile App Development",
    "Google Ads",
    "Next AI Digital",
  ],

  openGraph: {
    title:
      "Next AI Digital",

    description:
      "AI websites, SEO, AI chatbots and app development services.",

    url:
      "https://nextaidigital.online",

    siteName:
      "Next AI Digital",

    locale:
      "en_IN",

    type:
      "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <head>

        {/* ============================== */}
        {/* GOOGLE ADS TAG */}
        {/* ============================== */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18120955506"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag(){
                dataLayer.push(arguments);
              }

              gtag('js', new Date());

              gtag('config', 'AW-18120955506');
            `,
          }}
        />

        {/* ============================== */}
        {/* FAVICON */}
        {/* ============================== */}

        <link
          rel="icon"
          href="/favicon.ico"
        />

        {/* ============================== */}
        {/* VIEWPORT */}
        {/* ============================== */}

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

      </head>

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-black
          text-white
        `}
      >

        {/* ============================== */}
        {/* HEADER */}
        {/* ============================== */}

        <Header />

        {/* ============================== */}
        {/* PAGE CONTENT */}
        {/* ============================== */}

        {children}

      </body>

    </html>
  );
}