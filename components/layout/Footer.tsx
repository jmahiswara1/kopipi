import React from "react";
import Link from "next/link";
import { Instagram, Smartphone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark text-cream pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        <h2 className="font-display text-4xl font-bold text-tobacco">Kopipi.</h2>
                        <p className="font-editorial text-xl text-cream/80 max-w-sm leading-relaxed">
                            &quot;Secangkir yang tahu namamu&quot; — filosofi sederhana yang kami seduh setiap hari.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://www.instagram.com/j.mahiswara_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-tobacco hover:border-tobacco hover:text-espresso transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="tel:+6281216312645" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-tobacco hover:border-tobacco hover:text-espresso transition-all duration-300">
                                <Smartphone size={20} />
                            </a>
                            <a href="mailto:kopipi@gmail.com" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-tobacco hover:border-tobacco hover:text-espresso transition-all duration-300">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="font-ui text-sm tracking-widest uppercase text-tobacco mb-6">Eksplorasi</h3>
                        <ul className="flex flex-col gap-4 font-editorial text-lg text-cream/80">
                            <li><Link href="/" className="hover:text-tobacco transition-colors">Beranda</Link></li>
                            <li><Link href="/menu" className="hover:text-tobacco transition-colors">Menu</Link></li>
                            <li><Link href="/about" className="hover:text-tobacco transition-colors">Our Story</Link></li>
                            <li><Link href="/locations" className="hover:text-tobacco transition-colors">Lokasi</Link></li>
                            <li><Link href="/reservation" className="hover:text-tobacco transition-colors">Reservasi</Link></li>
                        </ul>
                    </div>

                    {/* Branches - NEW COLUMN */}
                    <div className="md:col-span-3">
                        <h3 className="font-ui text-sm tracking-widest uppercase text-tobacco mb-6">Cabang</h3>
                        <ul className="flex flex-col gap-4 font-editorial text-lg text-cream/80">
                            <li><Link href="/locations?branch=b1" className="hover:text-tobacco transition-colors">Tunjungan (Pusat)</Link></li>
                            <li><Link href="/locations?branch=b2" className="hover:text-tobacco transition-colors">Citraland (Barat)</Link></li>
                            <li><Link href="/locations?branch=b3" className="hover:text-tobacco transition-colors">Rungkut (Timur)</Link></li>
                            <li><Link href="/locations?branch=b4" className="hover:text-tobacco transition-colors">Sidoarjo</Link></li>
                            <li><Link href="/locations?branch=b5" className="hover:text-tobacco transition-colors">Malang</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3">
                        <h3 className="font-ui text-sm tracking-widest uppercase text-tobacco mb-6">Hubungi Kami</h3>
                        <ul className="flex flex-col gap-4 font-editorial text-lg text-cream/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-1 flex-shrink-0 text-tobacco" size={20} />
                                <span>Jl. Tunjungan No. 45,<br />Surabaya Pusat, 60275</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Smartphone className="flex-shrink-0 text-tobacco" size={20} />
                                <span>+62 812 1631 2645</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="flex-shrink-0 text-tobacco" size={20} />
                                <span>kopipi@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/40 font-ui text-sm">
                    <p>© {new Date().getFullYear()} Kopipi. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
