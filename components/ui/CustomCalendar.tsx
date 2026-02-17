"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

interface CustomCalendarProps {
    value: string; // YYYY-MM-DD
    onChange: (date: string) => void;
    minDate?: string; // YYYY-MM-DD
    placeholder?: string;
    className?: string;
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function CustomCalendar({
    value,
    onChange,
    minDate,
    placeholder = "Select Date",
    className = "",
}: CustomCalendarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Parse initial date or use current date for calendar view
    const initialDate = value ? new Date(value) : new Date();
    const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
    const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());

    // Update calendar view if value changes externally
    useEffect(() => {
        if (value) {
            const date = new Date(value);
            setCurrentMonth(date.getMonth());
            setCurrentYear(date.getFullYear());
        }
    }, [value]);

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

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handleDateSelect = (day: number) => {
        const mm = String(currentMonth + 1).padStart(2, '0');
        const dd = String(day).padStart(2, '0');
        const dateStr = `${currentYear}-${mm}-${dd}`;

        onChange(dateStr);
        setIsOpen(false);
    };

    const isDateDisabled = (day: number) => {
        if (!minDate) return false;

        const mm = String(currentMonth + 1).padStart(2, '0');
        const dd = String(day).padStart(2, '0');
        const dateStr = `${currentYear}-${mm}-${dd}`;

        return dateStr < minDate;
    };

    const isDateSelected = (day: number) => {
        if (!value) return false;
        const [y, m, d] = value.split('-').map(Number);
        return y === currentYear && m === (currentMonth + 1) && d === day;
    };

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
        const days = [];

        // Empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
        }

        // Days
        for (let day = 1; day <= daysInMonth; day++) {
            const disabled = isDateDisabled(day);
            const selected = isDateSelected(day);

            days.push(
                <button
                    key={day}
                    type="button"
                    disabled={disabled}
                    onClick={() => handleDateSelect(day)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${selected
                            ? "bg-tobacco text-white"
                            : disabled
                                ? "text-gray-300 cursor-not-allowed"
                                : "text-espresso hover:bg-cream/50"
                        }`}
                >
                    {day}
                </button>
            );
        }
        return days;
    };

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-white border-2 rounded-xl px-4 h-[60px] flex items-center text-left transition-all duration-300 group ${isOpen ? "border-tobacco ring-1 ring-tobacco" : "border-espresso/10 hover:border-tobacco/30 hover:bg-cream/20"
                    }`}
            >
                <div className={`flex-shrink-0 mr-3 transition-colors ${value || isOpen ? "text-tobacco" : "text-espresso/40 group-hover:text-tobacco"}`}>
                    <CalendarIcon size={20} />
                </div>
                <span className={`block truncate ${value ? "text-espresso font-medium Uppercase tracking-wider" : "text-espresso/40"}`}>
                    {value ? value : placeholder}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-50 left-0 top-[calc(100%+8px)] bg-white border border-espresso/10 rounded-xl shadow-xl p-4 w-[280px]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <button
                                type="button"
                                onClick={handlePrevMonth}
                                className="w-8 h-8 rounded-full border border-tobacco/30 flex items-center justify-center text-tobacco hover:bg-tobacco hover:text-white transition-colors"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <div className="font-display font-bold text-espresso">
                                {MONTHS[currentMonth]} {currentYear}
                            </div>
                            <button
                                type="button"
                                onClick={handleNextMonth}
                                className="w-8 h-8 rounded-full border border-tobacco/30 flex items-center justify-center text-tobacco hover:bg-tobacco hover:text-white transition-colors"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>

                        {/* Days Header */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                            {DAYS.map(d => (
                                <div key={d} className="w-8 h-8 flex items-center justify-center text-xs font-bold text-espresso/40">
                                    {d}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1">
                            {renderCalendarDays()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
