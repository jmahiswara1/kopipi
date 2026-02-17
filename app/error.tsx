"use client";

import { useEffect } from "react";
import RevealButton from "@/components/ui/RevealButton";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-espresso text-cream text-center px-4">
            <h2 className="font-display text-4xl mb-6">Ada yang salah...</h2>
            <p className="font-editorial text-xl text-cream/70 mb-8 max-w-md">
                Terjadi kesalahan pada sistem kami. Silakan coba lagi.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-tobacco text-espresso rounded-full font-bold hover:bg-white transition-colors"
                >
                    Coba Lagi
                </button>
                <RevealButton href="/" variant="outline">
                    Kembali ke Beranda
                </RevealButton>
            </div>
        </div>
    );
}
