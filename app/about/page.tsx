import StoryHero from "@/components/about/StoryHero";
import ScrollStory from "@/components/about/ScrollStory";
import ValuesSection from "@/components/about/ValuesSection";
import FooterTeaser from "@/components/home/FooterTeaser";

export default function AboutPage() {
    return (
        <>
            <StoryHero />
            <ScrollStory />
            <ValuesSection />
            <FooterTeaser />
        </>
    );
}
