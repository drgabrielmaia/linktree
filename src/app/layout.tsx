import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSWrapper from "./components/AOSWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Gabriel Maia - Medicina de Resultado | Longevidade e Performance",
  description: "Medicina integrativa e personalizada para longevidade saudável e performance executiva. Protocolos avançados de anti-aging e otimização hormonal.",
  keywords: ["medicina integrativa", "longevidade", "anti-aging", "performance executiva", "medicina personalizada", "otimização hormonal"],
  authors: [{ name: "Dr. Gabriel Maia" }],
  openGraph: {
    title: "Dr. Gabriel Maia - Medicina de Resultado",
    description: "Abordagem completa que combina medicina tradicional com técnicas avançadas para resultados excepcionais na saúde e bem-estar.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Gabriel Maia - Medicina de Resultado",
    description: "Medicina integrativa para longevidade saudável e performance executiva.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSWrapper>
          {children}
        </AOSWrapper>
      </body>
    </html>
  );
}
