"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    icon?: React.ReactNode;
    className?: string;
}

export default function CustomSelect({
    options,
    value,
    onChange,
    placeholder = "Select option",
    icon,
    className = "",
}: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find((opt) => opt.value === value);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-white border-2 rounded-xl px-4 h-[60px] flex items-center justify-between transition-all duration-300 ${isOpen ? "border-tobacco ring-1 ring-tobacco" : "border-espresso/10 hover:border-tobacco/30 hover:bg-cream/20"
                    }`}
            >
                <div className="flex items-center gap-3 overflow-hidden text-left">
                    {icon && <div className={`flex-shrink-0 ${value ? "text-tobacco" : "text-espresso/40"}`}>{icon}</div>}
                    <span className={`block truncate ${value ? "text-espresso font-medium" : "text-espresso/40"}`}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                </div>
                <div className={`text-espresso/40 transition-transform duration-300 ${isOpen ? "rotate-180 text-tobacco" : ""}`}>
                    <ChevronDown size={20} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-50 left-0 right-0 top-[calc(100%+8px)] bg-white border border-espresso/10 rounded-xl shadow-xl max-h-[300px] overflow-y-auto py-2"
                    >
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleSelect(option.value)}
                                className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-cream/30 transition-colors ${value === option.value ? "text-tobacco font-medium bg-cream/10" : "text-espresso/80"
                                    }`}
                            >
                                <span>{option.label}</span>
                                {value === option.value && <Check size={16} />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
