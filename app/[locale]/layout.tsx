import type { Metadata } from "next";
import { Montserrat, Poppins, Oswald } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import getCompanyInformationData from "@/lib/companyInformation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound, redirect } from "next/navigation";
import { routing } from "@/i18n/routing";
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
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const companyInfo = await getCompanyInformationData(locale);
  const messages = await getMessages({ locale });

  console.log("RootLayout locale:", locale);
  console.log("Messages keys:", Object.keys(messages));
  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} antialiased `}>
        <div>{locale}</div>
        <TopBar companyInfo={companyInfo}></TopBar>
        <NextIntlClientProvider messages={messages}>
          <Navigation companyInfo={companyInfo}></Navigation>
          <main>{children}</main>
        </NextIntlClientProvider>

        <Footer companyInfo={companyInfo}></Footer>
      </body>
    </html>
  );
}
