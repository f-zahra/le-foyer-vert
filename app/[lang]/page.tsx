import HeroSection from "@/components/HeroSection";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import getAboutData from "@/lib/aboutData";
import getServiceData from "@/lib/serviceData";
import getTestimonialsData from "@/lib/testimonials";
import getServiceAreasData from "@/lib/areasServed";
import getProjectGalleryData from "@/lib/projectGallery";
import getCompanyInformationData from "@/lib/companyInformation";
import ContactForm from "@/components/contactForm";
import getHeroSectionData from "@/lib/hero";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const [
    aboutData,
    serviceData,

    companyInfo,
    testimonials,
    serviceAreas,
    projectGallery,
    HeroSectiondata,
  ] = await Promise.all([
    getAboutData(lang),
    getServiceData(lang),
    getCompanyInformationData(lang),
    getTestimonialsData(),
    getServiceAreasData(),
    getProjectGalleryData(),
    getHeroSectionData(lang),
  ]);
  redirect("/fr");
  return (
    <div className="min-h-screen">
      <HeroSection HeroSectiondata={HeroSectiondata}></HeroSection>
      <About aboutData={aboutData}></About>
      <Services serviceData={serviceData}></Services>
      <div className="bg-no-repeat bg-cover bg-center  bg-[url('/images/blueprint.jpg')] relative">
        {/* Overlay */}
        <div className="absolute inset-0   bg-white/90 z-10" />
        <Projects projectGallery={projectGallery}></Projects>
        <Contact
          testimonials={testimonials}
          serviceAreas={serviceAreas}
          companyInfo={companyInfo}
        ></Contact>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}
