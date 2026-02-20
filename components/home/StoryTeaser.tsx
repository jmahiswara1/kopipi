"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";
import AnimatedText from "../ui/AnimatedText";
import RevealButton from "../ui/RevealButton";

export default function StoryTeaser() {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            imageRef.current,
            { y: "-10%" },
            {
                y: "10%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-32 overflow-hidden bg-espresso text-cream relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <span className="font-ui text-tobacco tracking-widest uppercase text-sm font-semibold mb-6 block">
                            Tentang Kami
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                            <AnimatedText text="Kami bukan sekadar kedai." type="word" />
                        </h2>
                        <div className="font-editorial text-lg md:text-xl text-cream/80 mb-10 space-y-6 leading-relaxed">
                            <p>
                                Sejak 2019, Kopipi tumbuh dari satu meja kecil di Tunjungan menjadi lima titik kehadiran yang hangat.
                            </p>
                            <p>
                                Kami percaya bahwa secangkir kopi adalah jembatan—antara pagi yang sibuk dan ketenangan, antara dua orang asing yang menjadi teman, dan antara kami dengan cerita Anda.
                            </p>
                        </div>
                        <RevealButton href="/about" variant="outline">
                            Baca Cerita Kami
                        </RevealButton>
                    </div>

                    {/* Parallax Image */}
                    <div className="w-full md:w-1/2 order-1 md:order-2 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg">
                        <div ref={imageRef} className="absolute inset-0 -top-[10%] -bottom-[10%] w-full h-[120%]">
                            <Image
                                src="https://images.unsplash.com/photo-1762265687611-a6cd23ca8fcf?q=80&w=1000&auto=format&fit=crop"
                                alt="Barista brewing coffee"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Overlay for cinematic feel */}
                        <div className="absolute inset-0 bg-espresso/20 mix-blend-multiply" />
                    </div>

                </div>
            </div>
        </section>
    );
}
