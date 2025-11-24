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

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;
  console.log(locale);
  return {
    title: "Le foyer Vert Inc",
    description: "compagnie de construction et renovation",
  };
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const companyInfo = await getCompanyInformationData(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${montserrat.variable} antialiased `}>
        <TopBar companyInfo={companyInfo}></TopBar>
        <NextIntlClientProvider messages={messages}>
          <Navigation companyInfo={companyInfo}></Navigation>
          <main>{children}</main>
          <Footer companyInfo={companyInfo}></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
