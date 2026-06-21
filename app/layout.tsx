import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
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

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ayoub El Maalmi — Java/Kotlin Developer | AI Integrator | Spring Boot",
  description:
    "Portfolio of Ayoub El Maalmi — Fullstack Java/Kotlin Developer & AI Integrator building scalable backend services with Spring Boot, LLM orchestration, and cloud-native deployments.",
  openGraph: {
    type: "website",
    url: "https://ayoubelmaalmi.dev",
    title: "Ayoub El Maalmi — Java/Kotlin Developer | AI Integrator | Spring Boot",
    description:
      "Fullstack Java/Kotlin Developer & AI Integrator specializing in Spring Boot backends, LLM-powered services, microservices, and cloud-native architecture.",
    siteName: "Ayoub El Maalmi"
  },
  metadataBase: new URL("https://ayoubelmaalmi.dev"),
  keywords: [
    "Java Developer",
    "Kotlin Developer",
    "AI Integrator",
    "LLM Integration",
    "Spring Boot",
    "Spring Framework",
    "Microservices",
    "REST API",
    "Fullstack Developer",
    "OCI",
    "Cloud",
    "Backend Engineer",
    "OpenAI",
    "AI Engineering"
  ],
  authors: [{ name: "Ayoub El Maalmi", url: "https://ayoubelmaalmi.dev" }],
  icons: {
    icon: "/favicon.ico"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ayoub El Maalmi",
  url: "https://ayoubelmaalmi.dev",
  jobTitle: "Fullstack Java/Kotlin Developer & AI Integrator",
  description:
    "Fullstack Java/Kotlin Developer & AI Integrator building backend services with Spring Boot, LLM orchestration, microservices, and cloud-native deployments.",
  email: "elmaalmiayoub@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rabat",
    addressCountry: "MA"
  },
  sameAs: [
    "https://www.linkedin.com/in/ayoub-el-maalmi-8b274a1a1/",
    "https://github.com/ELMAALMIA",
    "https://medium.com/@ayoubelmaalmi"
  ],
  knowsAbout: [
    "Java",
    "Kotlin",
    "Spring Boot",
    "AI Integration",
    "LLM APIs",
    "OpenAI",
    "Microservices",
    "REST APIs",
    "PostgreSQL",
    "OCI",
    "Docker",
    "Hexagonal Architecture"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grid-pattern bg-[hsl(222,47%,6%)]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:outline-none"
          >
            Skip to main content
          </a>
          <FloatingNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
