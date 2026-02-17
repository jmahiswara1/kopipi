import React from "react";
import AnimatedText from "../ui/AnimatedText";

export default function MenuHero() {
    return (
        <section className="pt-32 pb-16 bg-espresso text-cream text-center">
            <div className="container mx-auto px-4">
                <h1 className="font-display text-5xl md:text-7xl mb-6">
                    <AnimatedText text="Menu Kami" />
                </h1>
                <p className="font-editorial text-xl text-cream/70 max-w-2xl mx-auto">
                    Temukan rasa yang pas untuk setiap mood kamu. Dari espresso klasik hingga signature unik Kopipi.
                </p>
            </div>
        </section>
    );
}
