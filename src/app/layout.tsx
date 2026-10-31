import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://engr-ojkeh-portfolio.vercel.app"),
  title: {
    default: "Engr. Ojkeh — Software Engineer & Full Stack Developer",
    template: "%s | Engr. Ojkeh",
  },
  description:
    "Personal portfolio of Engr. Ojkeh — Software Engineer, Full Stack Developer, and Technology Entrepreneur. Building reliable, scalable, and user-centered digital products.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Portfolio",
    "Technology",
    "Software Development",
    "Engineering",
  ],
  authors: [{ name: "Engr. Ojkeh" }],
  creator: "Engr. Ojkeh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://engr-ojkeh-portfolio.vercel.app",
    siteName: "Engr. Ojkeh Portfolio",
    title: "Engr. Ojkeh — Software Engineer & Full Stack Developer",
    description:
      "Personal portfolio of Engr. Ojkeh — Software Engineer, Full Stack Developer, and Technology Entrepreneur.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Engr. Ojkeh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engr. Ojkeh — Software Engineer & Full Stack Developer",
    description:
      "Personal portfolio of Engr. Ojkeh — Software Engineer, Full Stack Developer, and Technology Entrepreneur.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
