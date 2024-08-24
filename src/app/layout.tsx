import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { validateRequest } from "@/auth";
import SessionProvider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await validateRequest();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider value={session || { user: null, session: null }}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
