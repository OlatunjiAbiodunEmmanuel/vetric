
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/toggle";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vetric",
  description: "A playful and innovative meme coin that combines the power of community with the fun of digital currency. Get ready to embrace the future of meme coins with Vetric!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg[#def1d5] dark:bg[#121212]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed bottom-4 right-4 hidden md:block text-black dark:text-white">
            <ModeToggle/>
          </div>
          <NavBar/>
          {children}
          <Toaster/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
