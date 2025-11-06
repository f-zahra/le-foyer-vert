import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import getCompanyInformationData from "@/lib/companyInformation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Le foyer Vert Inc",
  description: "compagnie de construction et renovation",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const companyInfo = await getCompanyInformationData();
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased `}>
        <TopBar companyInfo={companyInfo}></TopBar>
        <Navigation companyInfo={companyInfo}></Navigation>

        <main>{children}</main>

        <Footer companyInfo={companyInfo}></Footer>
      </body>
    </html>
  );
}
