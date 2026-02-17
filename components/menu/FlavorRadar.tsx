"use client";

import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
import { MenuItem } from "@/data/menu";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface FlavorRadarProps {
    item: MenuItem | null;
    onClose: () => void;
}

export default function FlavorRadar({ item, onClose }: FlavorRadarProps) {
    if (!item) return null;

    const data = [
        { subject: "Bitter", A: item.flavorProfile.bitter, fullMark: 10 },
        { subject: "Sour", A: item.flavorProfile.sour, fullMark: 10 },
        { subject: "Sweet", A: item.flavorProfile.sweet, fullMark: 10 },
        { subject: "Body", A: item.flavorProfile.body, fullMark: 10 },
        { subject: "Aroma", A: item.flavorProfile.aroma, fullMark: 10 },
        { subject: "Aftertaste", A: item.flavorProfile.aftertaste, fullMark: 10 },
    ];

    return (
        <AnimatePresence>
            {item && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-espresso/80 z-[60] backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-cream z-[70] shadow-2xl overflow-y-auto p-8"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-espresso/10 transition-colors"
                        >
                            <X size={24} className="text-espresso" />
                        </button>

                        <div className="mt-8">
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8 shadow-md">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h2 className="font-display text-3xl font-bold text-espresso mb-2">
                                {item.name}
                            </h2>
                            <p className="font-ui text-xl text-tobacco font-bold mb-6">
                                {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(item.price)}
                            </p>

                            <p className="font-editorial text-lg text-espresso/80 mb-8 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="bg-white p-4 rounded-xl shadow-inner mb-8">
                                <h3 className="font-ui text-sm uppercase tracking-widest text-tobacco mb-4 text-center">
                                    Profil Rasa
                                </h3>
                                <div className="h-[300px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                                            <PolarGrid stroke="#D4B896" />
                                            <PolarAngleAxis dataKey="subject" tick={{ fill: "#2C1810", fontSize: 12, fontFamily: "var(--font-ui)" }} />
                                            <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                                            <Radar
                                                name={item.name}
                                                dataKey="A"
                                                stroke="#C4956A"
                                                fill="#C4956A"
                                                fillOpacity={0.6}
                                            />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-espresso/10 rounded-full text-espresso text-xs font-bold uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
