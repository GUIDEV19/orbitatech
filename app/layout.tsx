import type { Metadata } from "next";
import { Exo_2, Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const exo2 = Exo_2({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "OrbitaTech — Tecnologia que Orbita o Futuro",
  description:
    "Desenvolvemos soluções tecnológicas de alta performance que impulsionam empresas a um novo patamar digital.",
  icons: {
    icon: "/Minha-logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${rajdhani.variable} ${exo2.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-black font-sans font-light text-orbita-text-main">
        {children}
      </body>
    </html>
  );
}
