
import type { Metadata } from "next";
import { Body, Header, Nav, Main } from "@/gui/core";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob Robert Pratt", // Tab Title //
  description: "Personal portfolio of projects and work experience."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
      return (
        <html lang="en" className="h-full w-full">
            <Body className="min-h-full min-w-full">
                <Main>
                    {children}
                </Main>
            </Body>
        </html >
  );
}


