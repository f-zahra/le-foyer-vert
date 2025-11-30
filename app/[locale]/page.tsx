import HeroSection from "@/components/HeroSection";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import getAboutData from "@/lib/aboutData";
import getServiceData from "@/lib/serviceData";
import getServiceAreasData from "@/lib/areasServed";
import getProjectGalleryData from "@/lib/projectGallery";
import getCompanyInformationData from "@/lib/companyInformation";
import ContactForm from "@/components/contactForm";
import getHeroSectionData from "@/lib/hero";

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const [
    aboutData,
    serviceData,

    companyInfo,

    serviceAreas,
    projectGallery,
    HeroSectiondata,
  ] = await Promise.all([
    getAboutData(locale),
    getServiceData(locale),
    getCompanyInformationData(locale),

    getServiceAreasData(),
    getProjectGalleryData(),
    getHeroSectionData(locale),
  ]);

  return (
    <div className="min-h-screen">
      <HeroSection HeroSectiondata={HeroSectiondata}></HeroSection>
      <About aboutData={aboutData}></About>
      <Services serviceData={serviceData}></Services>
      <div className="bg-no-repeat bg-cover bg-center  bg-[url('/images/blueprint.jpg')] relative">
        {/* Overlay */}
        <div className="absolute inset-0   bg-white/90 z-10" />
        <section className="max-w-7xl mx-auto relative z-20 py-20 bg-amber-100">
          <div className="flex flex-row items-center justify-center bg-amber-200 gap-10">
            <div className="bg-orange-400 px-10 py-8">
              <div>photo</div>
              <h3>Card Title</h3>
              <div>content</div>
              <div>name</div>
            </div>
            <div className="bg-orange-400">bye</div>
            <div className="bg-orange-400">bye</div>
          </div>
        </section>
        <Projects projectGallery={projectGallery}></Projects>
        <Contact
          serviceAreas={serviceAreas}
          companyInfo={companyInfo}
        ></Contact>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}
