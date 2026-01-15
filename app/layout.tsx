import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniversário da Maria - 17/01/26",
  description: "Celebração do aniversário da Maria - 17 de Janeiro de 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
