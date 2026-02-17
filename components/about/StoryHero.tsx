"use client";

import React from "react";
import AnimatedText from "../ui/AnimatedText";
import { motion } from "framer-motion";

export default function StoryHero() {
    return (
        <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-espresso/70 mix-blend-multiply" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-cream mb-6">
                    <AnimatedText text="Dari satu" className="block" />
                    <AnimatedText text="meja kecil." className="block text-tobacco" delay={0.2} />
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="font-editorial text-xl md:text-2xl text-cream/80 max-w-2xl mx-auto"
                >
                    Cerita perjalanan Kopipi meracik kehangatan untuk kota ini.
                </motion.p>
            </div>
        </section>
    );
}
