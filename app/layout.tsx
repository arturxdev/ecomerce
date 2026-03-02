import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Festejos Aurora",
  description: "Landing page de ecommerce para renta de equipo de fiesta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
