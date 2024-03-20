import "./globals.css";
import { Inter, Ubuntu_Mono } from "next/font/google";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: '400', variable:'--font-ubuntu' });

export const metadata = {
  title: "Projeto Inglês",
  description: "Projeto para disciplina de Inglês",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${ubuntuMono.variable}`} suppressHydrationWarning={true}>
      <head>
        <meta name="author" content="Silas Martins" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
