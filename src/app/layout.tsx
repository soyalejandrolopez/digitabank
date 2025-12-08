import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIGIBANK | Banca Digital en Colombia - Abre tu cuenta en 5 minutos",
  description: "DIGIBANK es la nueva era de la banca digital en Colombia. Abre tu cuenta bancaria en menos de 5 minutos, 100% digital, sin filas y sin complicaciones. Seguridad garantizada y sin costos ocultos.",
  keywords: "banca digital, cuenta bancaria online, banco digital Colombia, fintech Colombia, apertura de cuenta digital, DIGIBANK",
  authors: [
    { name: "Juliana Alejandra Díaz Vergara" },
    { name: "Soranyi Tatiana Caballero López" },
  ],
  openGraph: {
    title: "DIGIBANK | Banca Digital en Colombia",
    description: "Abre tu cuenta bancaria en menos de 5 minutos. 100% digital, sin filas y sin complicaciones.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
