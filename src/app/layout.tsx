import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import NavBar from "../routing/NavBar";
import Footer from "~/routing/Footer";

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
      <body className="bg-zinc-900 text-zinc-400 text-l whitespace-pre-line">
        <div className="flex flex-col h-screen w-screen">
          <NavBar />
          <div className="flex flex-grow flex-row max-w-full max-h-full overflow-auto justify-center">
            <div className="w-full flex flex-col items-center flex-grow">
              <div className="max-w-7xl min-w-3/5 px-4 sm:px-6 lg:px-8 mt-8 flex-grow">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
