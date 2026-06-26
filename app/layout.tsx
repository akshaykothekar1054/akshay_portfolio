import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { PERSON } from "@/lib/constants";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSON.name} — ${PERSON.title}`,
  description: PERSON.summary,
  keywords: [
    "Full Stack Developer",
    "React.js",
    "Node.js",
    "PHP",
    "JavaScript",
    "Portfolio",
    "Akshay Kothekar",
  ],
  authors: [{ name: PERSON.name }],
  openGraph: {
    title: `${PERSON.name} — ${PERSON.title}`,
    description: PERSON.summary,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className="bg-black text-white font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
