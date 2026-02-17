"use client";

import React from "react";
import RevealButton from "../ui/RevealButton";

export default function FooterTeaser() {
    return (
        <section className="py-24 bg-dark text-cream text-center">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                    Sudah siap menyapa<br />secangkir kopimu?
                </h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <RevealButton href="/menu" variant="primary">
                        Lihat Menu Lengkap
                    </RevealButton>
                    <RevealButton href="/reservation" variant="outline-light">
                        Reservasi Sekarang
                    </RevealButton>
                </div>
            </div>
        </section>
    );
}
