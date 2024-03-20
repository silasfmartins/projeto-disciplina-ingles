import type { Metadata } from "next";
import { Inter, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: '400', variable:'--font-ubuntu' });

export const metadata: Metadata = {
  title: "Projeto Inglês",
  description: "Projeto para disciplina de Inglês",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${ubuntuMono.variable}`}>
      <body className="bg-slate-100 dark:bg-slate-950 dark:text-white">{children}</body>
    </html>
  );
}
