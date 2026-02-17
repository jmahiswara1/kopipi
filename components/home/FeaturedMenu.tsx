"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { menuItems } from "@/data/menu";
import SectionHeader from "../ui/SectionHeader";
import RevealButton from "../ui/RevealButton";

export default function FeaturedMenu() {
    // Get 3 featured items
    const featuredItems = menuItems.filter(item => item.featured).slice(0, 3);

    return (
        <section className="py-24 md:py-32 bg-cream text-espresso overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader
                    title="Menu Pilihan"
                    subtitle="Favorit Minggu Ini"
                    className="mb-12"
                    textColor="text-espresso"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredItems.map((item, index) => (
                        <FeaturedCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                <div className="flex justify-end">
                    <RevealButton href="/menu" variant="secondary">
                        Lihat Semua Menu
                    </RevealButton>
                </div>
            </div>
        </section>
    );
}

function FeaturedCard({ item, index }: { item: import("@/data/menu").MenuItem; index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ perspective: 1000 }}
            className="h-full"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
            >
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/0 transition-colors duration-500" />

                    {/* Overlay Reveal */}
                    <div className="absolute inset-0 bg-espresso/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-display text-2xl text-cream italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            Lihat Detail
                        </span>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col relative bg-white z-10">
                    <div className="flex justify-between items-start mb-2">
                        <span className="font-ui text-xs font-bold tracking-wider text-tobacco uppercase border border-tobacco/30 px-2 py-1 rounded-full">
                            {item.category.replace('-', ' ')}
                        </span>
                        <span className="font-ui font-semibold text-lg text-espresso">
                            {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(item.price)}
                        </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-espresso mb-2 group-hover:text-tobacco transition-colors">
                        {item.name}
                    </h3>
                    <p className="font-editorial text-espresso/70 line-clamp-2 mb-4">
                        {item.description}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}
