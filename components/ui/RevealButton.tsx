"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";

interface RevealButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary" | "outline" | "outline-light";
}

export default function RevealButton({
    children,
    href,
    onClick,
    className = "",
    variant = "primary",
}: RevealButtonProps) {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const circleRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            const button = buttonRef.current;
            const circle = circleRef.current;
            const text = textRef.current;

            if (!button || !circle || !text) return;

            const tl = gsap.timeline({ paused: true });

            tl.to(circle, {
                width: "120%",
                paddingBottom: "120%",
                duration: 0.4,
                ease: "power2.inOut",
            }).to(
                text,
                {
                    color: variant === "outline" ? "#F5EDD6" : "#2C1810", // cream or espresso
                    duration: 0.2,
                },
                "-=0.3"
            );

            button.addEventListener("mouseenter", () => tl.play());
            button.addEventListener("mouseleave", () => tl.reverse());

            return () => {
                button.removeEventListener("mouseenter", () => tl.play());
                button.removeEventListener("mouseleave", () => tl.reverse());
            };
        },
        [variant]
    );

    const baseStyles =
        "relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full font-ui font-medium transition-colors duration-300 group z-10";

    const variants = {
        primary: "bg-tobacco text-espresso",
        secondary: "bg-espresso text-tobacco border border-tobacco",
        outline: "bg-transparent text-espresso border border-espresso hover:border-transparent",
        "outline-light": "bg-transparent text-cream border border-cream hover:border-transparent",
    };

    const content = (
        <>
            <span
                ref={circleRef}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 pt-[0%] rounded-full bg-espresso -z-10 group-hover:bg-espresso"
                style={{ backgroundColor: variant === 'outline' ? '#2C1810' : '#F5EDD6' }}
            />
            <span ref={textRef} className="z-10 relative flex items-center gap-2">
                {children} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
        </>
    );

    if (href) {
        return (
            <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`} ref={buttonRef as React.RefObject<HTMLAnchorElement>}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} ref={buttonRef as React.RefObject<HTMLButtonElement>}>
            {content}
        </button>
    );
}
