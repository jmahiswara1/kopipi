"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Coffee, Users, Heart, MapPin } from "lucide-react";

export default function ValuesSection() {
    const values = [
        {
            icon: <Coffee size={40} />,
            title: "Kualitas Tanpa Kompromi",
            description: "Dari biji pilihan hingga proses roasting presisi, kami memastikan setiap cangkir sempurna."
        },
        {
            icon: <Users size={40} />,
            title: "Komunitas Utama",
            description: "Kami tumbuh bersama pelanggan. Kopipi adalah ruang aman untuk semua kalangan."
        },
        {
            icon: <Heart size={40} />,
            title: "Keberagaman Rasa",
            description: "Untuk semua selera, semua mood. Kami merayakan preferensi rasa yang berbeda."
        },
        {
            icon: <MapPin size={40} />,
            title: "Ruang Bermakna",
            description: "Bukan sekadar tempat ngopi, tapi tempat di mana ide dan cerita lahir."
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-cream text-espresso">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader title="Nilai Kami" subtitle="Kopipi Values" centered className="mb-16" textColor="text-espresso" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-espresso/5"
                        >
                            <div className="mb-6 text-tobacco group-hover:scale-110 transition-transform duration-300">
                                {value.icon}
                            </div>
                            <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-tobacco transition-colors">
                                {value.title}
                            </h3>
                            <p className="font-editorial text-espresso/70 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
