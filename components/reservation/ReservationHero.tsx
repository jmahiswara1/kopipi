"use client";

import React from "react";
import AnimatedText from "../ui/AnimatedText";
import { motion } from "framer-motion";

export default function ReservationHero() {
    return (
        <section className="pt-32 pb-16 bg-espresso text-cream text-center relative overflow-hidden">
            {/* Background Pattern/Noise if needed */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <h1 className="font-display text-5xl md:text-7xl mb-6">
                    <AnimatedText text="Reservasi Meja" />
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-editorial text-xl text-cream/70 max-w-2xl mx-auto"
                >
                    Pastikan momen spesialmu tidak terlewat. Pesan tempat di cabang favoritmu sekarang.
                </motion.p>
            </div>
        </section>
    );
}
