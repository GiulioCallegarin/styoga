import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import NavBar from "./routing/NavBar";
import Footer from "~/app/routing/Footer";

export const metadata: Metadata = {
  title: "Sentiero Yoga",
  description: "Sentiero Yoga - Yoga Classes and Events",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-zinc-900 text-zinc-400 text-l whitespace-pre-line min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow w-full flex justify-center mt-16">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 mt-4">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
