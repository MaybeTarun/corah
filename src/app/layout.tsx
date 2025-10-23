import type { Metadata } from "next";
import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";

export const metadata: Metadata = {
  title: "CorahRehab",
  description: "corahrehab",
  authors: [{ name: "maybetarun.in" }],
  icons: "/revo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LenisWrapper>{children}</LenisWrapper>
      </body>
    </html>
  );
}
