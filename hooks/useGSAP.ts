import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { registerGSAP } from "@/lib/gsap-config";

// Register once
if (typeof window !== "undefined") {
    registerGSAP();
}

export const useGSAP = (
    effect: (context: gsap.Context, contextSafe?: any) => void | (() => void),
    dependencies: any[] = []
) => {
    const scope = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(effect, scope);
        return () => ctx.revert();
    }, [effect, ...dependencies]);

    return { scope };
};
