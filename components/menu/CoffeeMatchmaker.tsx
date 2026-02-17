"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { findBestMatches, MatchCriteria } from "@/lib/matchmaker-logic";
import { MenuItem } from "@/data/menu";
import RevealButton from "../ui/RevealButton";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

const steps = [
    {
        id: "mood",
        question: "Hari ini kamu lagi...",
        options: [
            { label: "Santai banget", value: "santai" },
            { label: "Butuh fokus", value: "fokus" },
            { label: "Mau ngobrol seru", value: "hangout" },
            { label: "Lagi suram", value: "suram" },
        ],
    },
    {
        id: "taste",
        question: "Kamu lebih suka rasa yang...",
        options: [
            { label: "Pahit tegas & bersih", value: "pahit" },
            { label: "Manis lembut", value: "manis" },
            { label: "Asam segar & fruity", value: "asam" },
            { label: "Creamy & rich", value: "creamy" },
        ],
    },
    {
        id: "time",
        question: "Kopipi paling nikmat saat...",
        options: [
            { label: "Pagi hari", value: "pagi" },
            { label: "Siang hari", value: "siang" },
            { label: "Sore hari", value: "sore" },
            { label: "Malam larut", value: "malam" },
        ],
    },
];

export default function CoffeeMatchmaker() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<MatchCriteria>({ mood: "", taste: "", time: "" });
    const [results, setResults] = useState<MenuItem[]>([]);

    const handleOptionClick = (value: string) => {
        const stepId = steps[currentStep].id;
        const newAnswers = { ...answers, [stepId]: value };
        setAnswers(newAnswers);

        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            const matches = findBestMatches(newAnswers as MatchCriteria);
            setResults(matches);
        }
    };

    const resetQuiz = () => {
        setAnswers({ mood: "", taste: "", time: "" });
        setResults([]);
        setCurrentStep(0);
    };

    return (
        <section className="py-16 md:py-24 bg-dark text-cream relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <SectionHeader title="Temukan Jodoh Kopimu" subtitle="Matchmaker" centered className="mb-8 md:mb-16" />

                <div className="max-w-2xl mx-auto min-h-[350px] md:min-h-[500px] relative flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                        {results.length === 0 && currentStep < steps.length ? (
                            <motion.div
                                key={steps[currentStep].id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                <div className="flex justify-center mb-6 md:mb-8 gap-2">
                                    {steps.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`h-1 w-12 rounded-full transition-colors duration-300 ${idx === currentStep ? 'bg-tobacco' : idx < currentStep ? 'bg-tobacco/50' : 'bg-white/10'}`}
                                        />
                                    ))}
                                </div>

                                <h3 className="font-display text-2xl md:text-4xl mb-6 md:mb-12">
                                    {steps[currentStep].question}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                    {steps[currentStep].options.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => handleOptionClick(option.value)}
                                            className="group relative p-4 md:p-6 border border-white/10 rounded-xl hover:border-tobacco transition-colors bg-white/5 hover:bg-white/10 text-base md:text-lg font-ui font-medium text-left md:text-center"
                                        >
                                            <span className="relative z-10 group-hover:text-tobacco transition-colors">{option.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            results.length > 0 && (
                                <div className="w-full">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-8"
                                    >
                                        <h3 className="font-display text-4xl mb-2 text-cream">Rekomendasi Spesial</h3>
                                        <p className="font-editorial text-cream/70">Berdasarkan suasana hati dan seleramu hari ini.</p>
                                    </motion.div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
                                        {results.map((item, index) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.2 }}
                                                className="bg-espresso border border-tobacco/30 rounded-2xl p-6 flex flex-col items-center relative overflow-hidden group hover:border-tobacco transition-colors"
                                            >
                                                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-tobacco/20 group-hover:border-tobacco transition-colors">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <h4 className="font-display text-2xl mb-2 text-center h-16 flex items-center justify-center">{item.name}</h4>
                                                <p className="font-editorial text-sm text-center text-cream/70 mb-6 line-clamp-3 h-[4.5em]">
                                                    {item.description}
                                                </p>
                                                <RevealButton href={`/menu?highlight=${item.id}`} variant="outline-light" className="!py-2 !px-6 text-sm">
                                                    Lihat Detail
                                                </RevealButton>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={resetQuiz}
                                        className="px-8 py-3 border border-tobacco text-tobacco rounded-full hover:bg-tobacco hover:text-espresso transition-colors font-semibold"
                                    >
                                        Coba Lagi
                                    </button>
                                </div>
                            )
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
