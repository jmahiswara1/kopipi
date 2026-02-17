"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { menuItems, MenuItem } from "@/data/menu";
import { motion, AnimatePresence } from "framer-motion";
import MenuHero from "@/components/menu/MenuHero";
import MenuFilter from "@/components/menu/MenuFilter";
import MenuCard from "@/components/menu/MenuCard";
import FlavorRadar from "@/components/menu/FlavorRadar";
import CoffeeMatchmaker from "@/components/menu/CoffeeMatchmaker";

import { Coffee, CupSoda, Flame, Sparkles, Utensils } from "lucide-react";

const categories = [
    { id: "all", label: "Semua", icon: <Coffee size={18} /> },
    { id: "espresso", label: "Espresso", icon: <Coffee size={18} /> },
    { id: "non-espresso", label: "Non-Espresso", icon: <CupSoda size={18} /> },
    { id: "manual-brew", label: "Manual Brew", icon: <Flame size={18} /> },
    { id: "signature", label: "Signature", icon: <Sparkles size={18} /> },
    { id: "food", label: "Food", icon: <Utensils size={18} /> },
];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const highlightId = searchParams.get("highlight");
        if (highlightId) {
            const item = menuItems.find((i) => i.id === highlightId);
            if (item) {
                setSelectedItem(item);
                // Scroll to item logic could be added here if we had item refs, 
                // but for now opening the radar is good enough feedback.
            }
        }
    }, [searchParams]);

    const filteredItems = activeCategory === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory);

    return (
        <>
            <MenuHero />

            <section className="py-12 bg-cream min-h-screen">
                <div className="container mx-auto px-4 md:px-6">
                    <MenuFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onSelectCategory={setActiveCategory}
                    />

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredItems.map((item) => (
                                <MenuCard
                                    key={item.id}
                                    item={item}
                                    onViewProfile={setSelectedItem}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20 text-espresso/50 font-editorial text-xl">
                            Tidak ada menu di kategori ini.
                        </div>
                    )}
                </div>
            </section>

            <CoffeeMatchmaker />

            <FlavorRadar
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        </>
    );
}
