import React from "react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export default function SectionHeader({
    title,
    subtitle,
    className = "",
    centered = false,
    textColor = "text-cream",
}: SectionHeaderProps & { textColor?: string }) {
    return (
        <div className={`flex flex-col gap-4 mb-16 ${centered ? "items-center text-center" : "items-start"} ${className}`}>
            {subtitle && (
                <span className="font-ui text-tobacco tracking-widest uppercase text-sm font-semibold">
                    {subtitle}
                </span>
            )}
            <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl ${textColor} leading-tight relative pb-6`}>
                {title}
                <span className={`absolute bottom-0 ${centered ? "left-1/2 -translate-x-1/2" : "left-0"} w-24 h-1 bg-tobacco rounded-full`} />
            </h2>
        </div>
    );
}
