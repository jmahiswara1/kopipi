"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import RevealButton from "../ui/RevealButton";
import AnimatedText from "../ui/AnimatedText";

export default function HeroSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
                <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-cream mb-6 leading-tight py-4">
                    <AnimatedText text="Secangkir   yang" className="block" delay={0.1} />
                    <AnimatedText text="tahu   namamu." className="block text-tobacco" delay={0.3} />
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="font-editorial text-xl md:text-2xl text-cream/80 mb-10 max-w-2xl mx-auto"
                >
                    Kopipi hadir di 5 titik kota untuk menemanimu,
                    <br className="hidden md:block" /> apapun moodmu, kapanpun waktunya.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <RevealButton href="/menu" variant="primary">
                        Jelajahi Menu
                    </RevealButton>
                    <RevealButton href="/reservation" variant="outline-light">
                        Buat Reservasi
                    </RevealButton>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/50 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={32} />
                </motion.div>
            </motion.div>
        </section>
    );
}
