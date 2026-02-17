"use client";

import React from "react";
import AnimatedText from "../ui/AnimatedText";

export default function LocationsHero() {
    return (
        <section className="pt-32 pb-16 bg-espresso text-cream text-center">
            <div className="container mx-auto px-4">
                <h1 className="font-display text-5xl md:text-7xl mb-6">
                    <AnimatedText text="Temukan Kami" />
                </h1>
                <p className="font-editorial text-xl text-cream/70 max-w-2xl mx-auto">
                    Lima titik temu di tiga kota. Dimanapun kamu berada, kehangatan Kopipi selalu dekat.
                </p>
            </div>
        </section>
    );
}
