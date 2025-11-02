"use client";
import HeroSection from "@/components/HeroSection";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection></HeroSection>
      <About></About>
      <Services></Services>
      <div className="bg-no-repeat bg-cover bg-center  bg-[url('/images/blueprint.jpg')] relative">
        {/* Overlay */}
        <div className="absolute inset-0   bg-white/90 z-10" />
        <Projects></Projects>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}
