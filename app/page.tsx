import HeroSection from "@/components/home/HeroSection";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import StoryTeaser from "@/components/home/StoryTeaser";
import ContactSection from "@/components/home/ContactSection";
import FAQSection from "@/components/home/FAQSection";
import LocationsPreview from "@/components/home/LocationsPreview";
import FooterTeaser from "@/components/home/FooterTeaser";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedMenu />
      <StoryTeaser />
      <ContactSection />
      <FAQSection />
      <LocationsPreview />
      <FooterTeaser />
    </>
  );
}
