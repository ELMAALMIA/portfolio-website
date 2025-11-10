import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/floating-nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ayoub El Maalmi — AI & Cloud Software Engineer",
  description:
    "Portfolio of Ayoub El Maalmi, showcasing AI integrations, Java/Spring platforms, and cloud-native automation with measurable impact.",
  openGraph: {
    type: "website",
    url: "https://ayoubelmaalmi.dev",
    title: "Ayoub El Maalmi — AI & Cloud Software Engineer",
    description:
      "Explore projects, experience, and insights spanning AI, DevOps, and cloud ecosystems engineered by Ayoub El Maalmi.",
    siteName: "Ayoub El Maalmi Portfolio"
  },
  metadataBase: new URL("https://ayoubelmaalmi.dev"),
  keywords: [
    "Java",
    "Spring Boot",
    "Cloud",
    "OCI",
    "DevOps",
    "Salesforce",
    "AI Integration",
    "Software Engineer",
    "Portfolio"
  ],
  authors: [{ name: "Ayoub El Maalmi", url: "https://ayoubelmaalmi.dev" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <FloatingNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

