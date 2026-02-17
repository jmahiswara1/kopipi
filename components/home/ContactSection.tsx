"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Instagram, MessageCircle, Twitter, MapPin, Video } from "lucide-react";
import RevealButton from "../ui/RevealButton";
import SectionHeader from "../ui/SectionHeader";

export default function ContactSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section className="py-24 md:py-32 bg-dark text-cream relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                    {/* Contact Info */}
                    <div>
                        <SectionHeader title="Sapa Kami" subtitle="Hubungi Kami" />
                        <p className="font-editorial text-xl text-cream/70 mb-12 max-w-md">
                            Punya pertanyaan, kritik, saran, atau sekadar ingin menyapa? Kami selalu senang mendengar dari Anda.
                        </p>

                        <ul className="space-y-8 font-ui text-lg">
                            <li className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-tobacco/30 flex items-center justify-center text-tobacco group-hover:bg-tobacco group-hover:text-espresso transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <span className="block text-sm text-cream/50 uppercase tracking-wider mb-1">Email</span>
                                    <a href="mailto:kopipi@gmail.com" className="hover:text-tobacco transition-colors">kopipi@gmail.com</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-tobacco/30 flex items-center justify-center text-tobacco group-hover:bg-tobacco group-hover:text-espresso transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <span className="block text-sm text-cream/50 uppercase tracking-wider mb-1">Telepon</span>
                                    <a href="tel:+6281216312645" className="hover:text-tobacco transition-colors">+62 812 1631 2645</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-tobacco/30 flex items-center justify-center text-tobacco group-hover:bg-tobacco group-hover:text-espresso transition-all duration-300">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <span className="block text-sm text-cream/50 uppercase tracking-wider mb-1">WhatsApp</span>
                                    <a href="https://wa.me/6281216312645" target="_blank" rel="noopener noreferrer" className="hover:text-tobacco transition-colors">+62 812 1631 2645</a>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-16 pt-16 border-t border-white/10">
                            <h4 className="font-display text-2xl mb-6">Ikuti Perjalanan Kami</h4>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/j.mahiswara_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/5 hover:bg-tobacco hover:text-espresso transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/5 hover:bg-tobacco hover:text-espresso transition-all duration-300">
                                    <Video size={20} /> {/* TikTok Placeholder */}
                                </a>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/5 hover:bg-tobacco hover:text-espresso transition-all duration-300">
                                    <Twitter size={20} /> {/* X Placeholder */}
                                </a>
                                <a href="/locations" className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/5 hover:bg-tobacco hover:text-espresso transition-all duration-300">
                                    <MapPin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-espresso p-8 md:p-12 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-tobacco/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-ui uppercase tracking-wider text-cream/60 mb-2">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-tobacco focus:ring-1 focus:ring-tobacco transition-all"
                                    placeholder="Nama Lengkap Anda"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-ui uppercase tracking-wider text-cream/60 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-tobacco focus:ring-1 focus:ring-tobacco transition-all"
                                    placeholder="email@anda.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-ui uppercase tracking-wider text-cream/60 mb-2">Subjek</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-tobacco focus:ring-1 focus:ring-tobacco transition-all"
                                    placeholder="Halo Kopipi! Saya ingin..."
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-ui uppercase tracking-wider text-cream/60 mb-2">Pesan</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-tobacco focus:ring-1 focus:ring-tobacco transition-all resize-none"
                                    placeholder="Tulis pesanmu di sini..."
                                />
                            </div>

                            <RevealButton className="w-full justify-center" variant="primary">
                                Kirim Pesan
                            </RevealButton>
                        </form>

                        {/* Success Toast */}
                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                    className="absolute inset-0 bg-espresso/95 backdrop-blur-sm flex items-center justify-center flex-col text-center p-8 z-20"
                                >
                                    <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mb-4 text-white text-2xl">
                                        ✓
                                    </div>
                                    <h3 className="font-display text-3xl mb-2 text-cream">Pesan Terkirim!</h3>
                                    <p className="font-editorial text-cream/70">Terima kasih telah menghubungi kami. Kami akan membalas secepatnya.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
