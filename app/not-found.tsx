import RevealButton from "@/components/ui/RevealButton";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-espresso text-cream text-center px-4">
            <h1 className="font-display text-9xl text-tobacco mb-4">404</h1>
            <h2 className="font-display text-4xl mb-6">Halaman Tidak Ditemukan</h2>
            <p className="font-editorial text-xl text-cream/70 mb-8 max-w-md">
                Sepertinya kamu tersesat. Jangan khawatir, mari kembali ke jalan yang benar (dan berkafein).
            </p>
            <RevealButton href="/" variant="primary">
                Kembali ke Beranda
            </RevealButton>
        </div>
    );
}
