import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advika's Portfolio",
  description: "Modern & Minimal Portfolio",
  icons: {
    icon: "/jsm-logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" />
        <link rel="icon" href="/jsm-logo.ico" type="image/png" sizes="32x32" />
        <link rel="icon" href="/jsm-logo.ico" type="image/png" sizes="16x16" />
        <link rel="icon" href="/jsm-logo.ico" type="image/png" sizes="48x48" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
