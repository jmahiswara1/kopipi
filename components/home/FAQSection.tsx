"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const faqs = [
    {
        category: "Umum",
        items: [
            { q: "Berapa cabang Kopipi saat ini?", a: "Saat ini Kopipi memiliki 5 cabang yang tersebar di Surabaya (Pusat, Barat, Timur), Sidoarjo, dan Malang." },
            { q: "Apakah Kopipi buka setiap hari?", a: "Ya, kami buka setiap hari termasuk hari libur nasional. Jam operasional bervariasi tergantung cabang." },
            { q: "Apakah ada menu seasonal?", a: "Tentu! Kami selalu menghadirkan menu spesial setiap musim atau perayaan tertentu." },
        ],
    },
    {
        category: "Menu & Pesanan",
        items: [
            { q: "Apakah bisa custom level gula dan es?", a: "Bisa banget. Silakan request ke barista kami saat pemesanan." },
            { q: "Apakah ada pilihan non-dairy milk?", a: "Kami menyediakan Oat Milk dan Almond Milk sebagai alternatif susu sapi." },
            { q: "Berapa lama waktu tunggu pesanan?", a: "Rata-rata 5-10 menit, namun bisa lebih lama saat jam sibuk." },
            { q: "Apakah ada menu untuk orang dengan alergi?", a: "Kami mencantumkan informasi alergen. Mohon informasikan alergi Anda kepada staf kami." },
        ],
    },
    {
        category: "Reservasi & Fasilitas",
        items: [
            { q: "Bagaimana cara membuat reservasi?", a: "Anda bisa melakukan reservasi melalui halaman Reservasi di website ini atau menghubungi WhatsApp kami." },
            { q: "Apakah ada minimum order untuk reservasi?", a: "Tidak ada minimum order untuk meja reguler. Ruang meeting mungkin memiliki ketentuan khusus." },
            { q: "Apakah tersedia ruang meeting atau private?", a: "Ya, beberapa cabang seperti Rungkut dan Tunjungan memiliki fasilitas meeting room." },
            { q: "Apakah WiFi tersedia di semua cabang?", a: "Ya, WiFi kecepatan tinggi tersedia gratis di seluruh cabang kami." },
        ],
    },
    {
        category: "Lainnya",
        items: [
            { q: "Apakah Kopipi membuka franchise?", a: "Saat ini seluruh cabang dikelola langsung oleh manajemen pusat untuk menjaga kualitas." },
        ],
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <section className="py-24 md:py-32 bg-cream text-espresso">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader title="Pertanyaan Umum" subtitle="FAQ" centered className="mb-16" textColor="text-espresso" />

                <div className="max-w-3xl mx-auto space-y-12">
                    {faqs.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="font-display text-2xl mb-6 text-tobacco">{category.category}</h3>
                            <div className="space-y-4">
                                {category.items.map((item, index) => {
                                    const id = `${catIndex}-${index}`;
                                    const isOpen = openIndex === id;

                                    return (
                                        <div key={index} className="border-b border-espresso/10 last:border-0 pb-4">
                                            <button
                                                onClick={() => toggleAccordion(id)}
                                                className="w-full flex justify-between items-center text-left py-2 font-ui font-medium text-lg hover:text-tobacco transition-colors"
                                            >
                                                {item.q}
                                                <motion.span
                                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="ml-4 flex-shrink-0 text-tobacco"
                                                >
                                                    {isOpen ? <Plus size={24} className="rotate-45" /> : <Plus size={24} />}
                                                </motion.span>
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="font-editorial text-espresso/70 pt-2 pb-4 leading-relaxed">
                                                            {item.a}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
