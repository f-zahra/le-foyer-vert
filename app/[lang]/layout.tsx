import type { Metadata } from "next";
import { Montserrat, Poppins, Oswald } from "next/font/google";
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
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-oswald",
});

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Le foyer Vert Inc",
  description: "compagnie de construction et renovation",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  const companyInfo = await getCompanyInformationData(lang);
  return (
    <html lang={lang}>
      <body className={`${montserrat.variable} antialiased `}>
        <div>{lang}</div>
        <TopBar companyInfo={companyInfo}></TopBar>
        <Navigation companyInfo={companyInfo}></Navigation>

        <main>{children}</main>

        <Footer companyInfo={companyInfo}></Footer>
      </body>
    </html>
  );
}
