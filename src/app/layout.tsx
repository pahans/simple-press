import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { fontSans } from "./fonts";
import "./globals.css";
import { Header } from "@/app/components/header";

export const metadata: Metadata = {
  title: "Simple Press",
  description: "Pressing simplicity into every word.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <main className="max-w-2xl container">{children}</main>
      </body>
    </html>
  );
}
