import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyRoom",
  description: "Hotel Booking app",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <main className="flex flex-col min-h-screen bg-secondary">
            <NavBar />
            <section className="flex-grow">{children}</section>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
