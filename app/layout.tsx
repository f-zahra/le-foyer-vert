import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Le foyer Vert Inc",
  description: "compagnie de construction et renovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased `}>
        <TopBar></TopBar>
        <Navigation></Navigation>

        <main>{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
