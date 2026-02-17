"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import SectionHeader from "../ui/SectionHeader";

const chapters = [
    {
        year: "2019",
        title: "Awal Mula",
        description: "Sebuah gerobak sederhana di sudut jalan Tunjungan. Dua orang, satu mesin espresso manual, dan mimpi besar.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop"
    },
    {
        year: "2020",
        title: "Bertahan",
        description: "Pandemi memukul keras, tapi komunitas menyelamatkan kami. Kami beralih ke layanan pesan antar dengan botol kaca.",
        image: "https://images.unsplash.com/photo-1517457740263-5474c3d4c781?q=80&w=1000&auto=format&fit=crop"
    },
    {
        year: "2021",
        title: "Bangkit",
        description: "Toko pertama resmi dibuka. Sebuah ruko kecil dengan kapasitas 15 orang, namun penuh kenangan.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
    },
    {
        year: "2022",
        title: "Berkembang",
        description: "Dua cabang baru lahir di Surabaya Barat dan Timur. Tim kami bertumbuh menjadi keluarga besar 40 orang.",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop"
    },
    {
        year: "2023",
        title: "Kopipi Kini",
        description: "Lima cabang. Ribuan cangkir setiap hari. Satu misi yang sama: Menyajikan kehangatan yang tahu namamu.",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function ScrollStory() {
    const containerRef = useRef(null);
    const leftPanelRef = useRef(null);
    const rightPanelRef = useRef(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        // Pin left panel - Desktop only
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function () {
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: leftPanelRef.current,
                    scrub: true,
                });
            }
        });

        // Animate images on scroll
        imageRefs.current.forEach((img) => {
            if (!img) return;
            gsap.fromTo(img,
                { opacity: 0.3, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: img,
                        start: "top center+=200",
                        end: "bottom center",
                        scrub: 1,
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={containerRef} className="relative bg-espresso text-cream">
            <div className="flex flex-col md:flex-row">

                {/* Left Panel - Pinned (Desktop) */}
                <div
                    ref={leftPanelRef}
                    className="w-full md:w-1/2 min-h-[50vh] md:h-screen md:sticky top-0 flex items-center justify-center p-8 md:p-16 bg-dark z-10"
                >
                    <div className="max-w-md">
                        <SectionHeader title="Perjalanan Kami" subtitle="Milestone" className="mb-8" />
                        <p className="font-editorial text-xl text-cream/70 leading-relaxed">
                            Setiap tahun adalah babak baru. Ini adalah garis waktu bagaimana kami sampai di sini.
                        </p>
                        <div className="mt-12 hidden md:block">
                            <span className="font-display text-9xl text-tobacco/10 absolute bottom-0 left-0 -z-10 select-none">
                                KOPIPI
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Scrollable Content */}
                <div ref={rightPanelRef} className="w-full md:w-1/2">
                    {chapters.map((chapter, index) => (
                        <div
                            key={index}
                            className="min-h-[70vh] md:min-h-screen flex flex-col justify-center p-8 md:p-16 border-l border-white/5"
                        >
                            <div
                                ref={el => { if (el) imageRefs.current[index] = el }}
                                className="relative aspect-video w-full rounded-2xl overflow-hidden mb-8 opacity-50 transition-all duration-500"
                            >
                                <Image
                                    src={chapter.image}
                                    alt={chapter.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-ui text-tobacco text-6xl font-bold mb-4 block opacity-50">
                                {chapter.year}
                            </span>
                            <h3 className="font-display text-4xl font-bold mb-6 text-cream">
                                {chapter.title}
                            </h3>
                            <p className="font-editorial text-xl text-cream/80 leading-relaxed">
                                {chapter.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
