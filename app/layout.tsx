import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: {
    default: "Sam Nogalski - Software Engineering & AI Coding Deployment | Lovable v0 base44",
    template: "%s | samn.dev",
  },
  description:
    "Deploy your Lovable, v0, and base44 projects to the web. Professional software engineering services from creative AI coding deployments to enterprise development.",
  keywords: [
    "Lovable deployment",
    "v0 deployment",
    "base44 deployment",
    "AI coding tools",
    "vibe coding",
    "software engineering",
    "technical leadership",
    "web development",
    "project deployment",
    "AI generated code",
    "creative coding",
    "software architecture",
    "DevOps",
    "enterprise development",
    "Sam Nogalski",
  ],
  authors: [{ name: "Sam Nogalski" }],
  creator: "Sam Nogalski",
  publisher: "Sam Nogalski",
  metadataBase: new URL("https://samn.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samn.dev",
    title: "Sam Nogalski - Software Engineering & AI Coding Deployment",
    description: "Deploy your Lovable, v0, and base44 projects to the web. Professional software engineering services from creative AI coding deployments to enterprise development.",
    siteName: "samn.dev",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Sam Nogalski - Software Engineering & AI Coding Deployment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Nogalski - Software Engineering & AI Coding Deployment",
    description: "Deploy your Lovable, v0, and base44 projects to the web. Professional software engineering services.",
    images: ["/web-app-manifest-512x512.png"],
    creator: "@samn_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-code-here",
    yandex: "verification-code-here",
    other: {
      "msvalidate.01": "verification-code-here",
      "baidu-site-verification": "verification-code-here",
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="samn.dev"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col items-center relative",
          GeistSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
