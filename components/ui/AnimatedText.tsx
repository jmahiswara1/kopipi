"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    type?: "word" | "char";
    className?: string;
    delay?: number;
    duration?: number;
}

export default function AnimatedText({
    text,
    type = "word",
    className = "",
    delay = 0,
    duration = 0.05,
}: AnimatedTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    if (type === "char") {
        const letters = Array.from(text);
        return (
            <motion.span
                ref={ref}
                className={`inline-block ${className}`}
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {letters.map((letter, index) => (
                    <motion.span variants={child} key={index}>
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    const words = text.split(" ");
    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden mr-1.5 align-bottom pb-2">
                    <motion.span variants={child} className="inline-block">
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
}
