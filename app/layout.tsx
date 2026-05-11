import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Luno Labs — We listen, then we build",
  description:
    "A small studio for small businesses without software. Booking systems, websites, and AI automations — built calmly, shipped fast, made to last.",
  icons: {
    icon: "/Luno-logo.png",
    shortcut: "/Luno-logo.png",
    apple: "/Luno-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={manrope.variable}>
      <body className={cn("min-h-screen bg-background text-foreground", manrope.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
