"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MenuItem } from "@/data/menu";


interface MenuCardProps {
    item: MenuItem;
    onViewProfile: (item: MenuItem) => void;
}

export default function MenuCard({ item, onViewProfile }: MenuCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            onClick={() => onViewProfile(item)}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.tags.includes("bestseller") && (
                    <div className="absolute top-4 left-4 bg-tobacco text-espresso text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Bestseller
                    </div>
                )}

                {/* Hover Detail */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <span className="text-white font-ui font-bold text-sm tracking-widest drop-shadow-md uppercase">Detail</span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl font-bold text-espresso group-hover:text-tobacco transition-colors">
                        {item.name}
                    </h3>
                    <span className="font-ui font-semibold text-tobacco whitespace-nowrap">
                        {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(item.price)}
                    </span>
                </div>
                <p className="font-editorial text-espresso/70 text-sm line-clamp-2">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}
