export default function Loading() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-espresso z-[9999]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-tobacco border-t-transparent rounded-full animate-spin" />
                <span className="font-ui text-tobacco text-sm uppercase tracking-widest animate-pulse">
                    Menyeduh...
                </span>
            </div>
        </div>
    );
}
