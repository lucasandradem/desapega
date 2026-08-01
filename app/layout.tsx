import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desapego da Mudança",
  description: "Móveis e itens disponíveis para venda."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
