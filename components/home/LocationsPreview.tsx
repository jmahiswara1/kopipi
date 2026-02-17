"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { branches } from "@/data/branches";
import SectionHeader from "../ui/SectionHeader";
import RevealButton from "../ui/RevealButton";
import { Clock, MapPin } from "lucide-react";

export default function LocationsPreview() {

    return (
        <section className="py-24 md:py-32 bg-espresso text-cream overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <SectionHeader title="Temukan Kami" subtitle="Lokasi Cabang" className="mb-0" />
                <RevealButton href="/locations" variant="outline" className="hidden md:inline-flex">
                    Lihat Semua Lokasi
                </RevealButton>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto pb-12 hide-scrollbar pl-4 md:pl-[calc((100vw-1280px)/2+24px)] pr-4">
                <div className="flex gap-6 w-max">
                    {branches.map((branch, index) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="w-[300px] md:w-[400px] flex-shrink-0 group"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
                                <Image
                                    src={branch.heroImage}
                                    alt={branch.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-cream text-espresso text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Buka
                                </div>
                            </div>

                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-tobacco transition-colors">
                                {branch.name}
                            </h3>
                            <p className="font-editorial text-cream/70 mb-4 h-12">
                                {branch.area}
                            </p>

                            <div className="flex flex-col gap-2 font-ui text-sm text-cream/60 mb-6">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-tobacco" />
                                    <span>{branch.hours.weekday}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MapPin size={16} className="text-tobacco mt-1 flex-shrink-0" />
                                    <span className="line-clamp-2">{branch.address}</span>
                                </div>
                            </div>

                            <Link href={`/locations?branch=${branch.id}`} className="inline-block text-tobacco font-ui font-medium hover:text-white transition-colors border-b border-tobacco hover:border-white pb-1">
                                Lihat Detail
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-8 md:hidden text-center">
                <RevealButton href="/locations" variant="outline">
                    Lihat Semua Lokasi
                </RevealButton>
            </div>
        </section>
    );
}
