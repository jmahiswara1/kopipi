"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { branches } from "@/data/branches";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import Image from "next/image";
import RevealButton from "../ui/RevealButton";

export default function LocationList() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const branchId = searchParams.get("branch");
        if (branchId) {
            const element = document.getElementById(branchId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }, [searchParams]);

    return (
        <section className="py-12 bg-cream min-h-screen">
            <div className="container mx-auto px-4 md:px-6 space-y-24">
                {branches.map((branch, index) => {
                    return (
                        <motion.div
                            id={branch.id}
                            key={branch.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src={branch.heroImage}
                                    alt={branch.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/0 transition-colors duration-500" />
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-tobacco/20 text-tobacco rounded-full text-xs font-bold uppercase tracking-wider border border-tobacco/30">
                                        {branch.area}
                                    </span>
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl text-espresso mb-6">
                                    {branch.name}
                                </h2>

                                <div className="space-y-6 font-ui text-lg text-espresso/80">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-tobacco flex-shrink-0 mt-1" />
                                        <p>{branch.address}</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="text-tobacco flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold">Weekdays: <span className="font-normal">{branch.hours.weekday}</span></p>
                                            <p className="font-bold">Weekend: <span className="font-normal">{branch.hours.weekend}</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="text-tobacco flex-shrink-0 mt-1" />
                                        <p>{branch.phone}</p>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-2">
                                    {branch.amenities.map(amenity => (
                                        <span key={amenity} className="text-xs px-2 py-1 bg-espresso/5 rounded text-espresso/60 border border-espresso/10">
                                            {amenity}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-10 flex gap-4">
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${branch.coordinates.lat},${branch.coordinates.lng}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-espresso text-cream rounded-full font-bold hover:bg-tobacco hover:text-espresso transition-colors flex items-center gap-2"
                                    >
                                        <Navigation size={18} /> Petunjuk Arah
                                    </a>
                                    <RevealButton href="/reservation" variant="outline">
                                        Reservasi Meja
                                    </RevealButton>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
