"use client";

import React from "react";
import { motion } from "framer-motion";

interface MenuFilterProps {
    categories: { id: string; label: string; icon: React.ReactNode }[];
    activeCategory: string;
    onSelectCategory: (id: string) => void;
}

export default function MenuFilter({ categories, activeCategory, onSelectCategory }: MenuFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => {
                const isActive = activeCategory === cat.id;

                return (
                    <button
                        key={cat.id}
                        onClick={() => onSelectCategory(cat.id)}
                        className={`relative px-6 py-3 rounded-full font-bold transition-colors duration-300 flex items-center gap-2 ${isActive ? "text-cream" : "text-espresso hover:bg-espresso/5"
                            }`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activePill"
                                className="absolute inset-0 bg-espresso rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 text-xl">{cat.icon}</span>
                        <span className="relative z-10">{cat.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
