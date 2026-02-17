"use client";

import React, { useState, useEffect } from "react";
import { branches } from "@/data/branches";
import RevealButton from "../ui/RevealButton";
import CustomSelect from "../ui/CustomSelect";
import CustomCalendar from "../ui/CustomCalendar";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Clock, MapPin, Coffee, Briefcase, Camera, MessageCircle, Instagram } from "lucide-react";

const reservationTypes = [
    { id: "reguler", label: "Meja Reguler", icon: <Coffee size={24} />, desc: "Untuk nongkrong santai atau kerja.", minDays: 0 },
    { id: "meeting", label: "Ruang Meeting", icon: <Briefcase size={24} />, desc: "Privasi untuk diskusi tim. Min H-3.", minDays: 3 },
    { id: "community", label: "Acara Komunitas", icon: <Users size={24} />, desc: "Gathering atau workshop. Min H-3.", minDays: 3 },
    { id: "photo", label: "Sesi Foto", icon: <Camera size={24} />, desc: "Commercial atau pre-wedding. Min H-7.", minDays: 7 },
];

const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
];

export default function ReservationForm() {
    const [formData, setFormData] = useState({
        type: "reguler",
        branch: "",
        date: "",
        time: "",
        pax: 2,
        name: "",
        whatsapp: "",
        email: "",
        notes: ""
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [minDate, setMinDate] = useState("");

    // Calculate min date based on selected type
    useEffect(() => {
        const typeInfo = reservationTypes.find(t => t.id === formData.type);
        const daysToAdd = typeInfo ? typeInfo.minDays : 0;

        const date = new Date();
        date.setDate(date.getDate() + daysToAdd);

        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');

        const calculatedMinDate = `${yyyy}-${mm}-${dd}`;
        setMinDate(calculatedMinDate);

        // Reset date if current selection is invalid
        if (formData.date && formData.date < calculatedMinDate) {
            setFormData(prev => ({ ...prev, date: "" }));
        }
    }, [formData.type, formData.date]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTypeSelect = (id: string) => {
        setFormData({ ...formData, type: id });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowSuccess(true);
    };

    const inputClasses = "w-full bg-white border-2 border-espresso/10 rounded-xl px-4 py-4 text-espresso placeholder:text-espresso/30 focus:outline-none focus:border-tobacco focus:ring-1 focus:ring-tobacco transition-all appearance-none";
    const labelClasses = "block text-xs font-bold uppercase tracking-widest text-espresso/60 mb-2";

    return (
        <section className="py-16 bg-cream min-h-screen text-espresso">
            <div className="container mx-auto px-4 max-w-5xl">

                <AnimatePresence mode="wait">
                    {!showSuccess ? (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            onSubmit={handleSubmit}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-espresso/5"
                        >
                            {/* Part 1: Reservation Type */}
                            <div className="mb-12">
                                <h3 className="font-display text-2xl mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-tobacco text-white flex items-center justify-center text-sm font-bold">1</span>
                                    Tipe Reservasi
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {reservationTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => handleTypeSelect(type.id)}
                                            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 flex flex-col gap-3 group hover:shadow-lg relative overflow-hidden ${formData.type === type.id
                                                ? "border-tobacco bg-tobacco/5 ring-1 ring-tobacco"
                                                : "border-espresso/10 hover:border-tobacco/50 hover:bg-cream/20"
                                                }`}
                                        >
                                            <div className={`${formData.type === type.id ? "text-tobacco" : "text-espresso/50 group-hover:text-tobacco"} transition-colors`}>
                                                {type.icon}
                                            </div>
                                            <div>
                                                <div className="font-bold font-display text-lg leading-tight mb-1">{type.label}</div>
                                                <div className="text-xs font-ui text-espresso/60">{type.desc}</div>
                                            </div>
                                            {formData.type === type.id && (
                                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-tobacco" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Part 2: Time & Place */}
                            <div className="mb-12">
                                <h3 className="font-display text-2xl mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-tobacco text-white flex items-center justify-center text-sm font-bold">2</span>
                                    Waktu & Tempat
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className={labelClasses}>Pilih Cabang</label>
                                        <CustomSelect
                                            value={formData.branch}
                                            onChange={(val) => setFormData({ ...formData, branch: val })}
                                            options={branches.map(b => ({ value: b.id, label: b.name }))}
                                            placeholder="Pilih lokasi Kopipi favoritmu"
                                            icon={<MapPin size={20} />}
                                        />
                                    </div>

                                    <div>
                                        <label className={labelClasses}>Tanggal Kedatangan</label>
                                        <CustomCalendar
                                            value={formData.date}
                                            onChange={(val) => setFormData({ ...formData, date: val })}
                                            minDate={minDate}
                                            placeholder="Pilih Tanggal"
                                        />
                                        <p className="text-[10px] text-tobacco mt-1 font-medium pl-1">
                                            {formData.type === 'meeting' && "*Min booking H-3"}
                                            {formData.type === 'community' && "*Min booking H-3"}
                                            {formData.type === 'photo' && "*Min booking H-7"}
                                        </p>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>Jam Kedatangan</label>
                                        <CustomSelect
                                            value={formData.time}
                                            onChange={(val) => setFormData({ ...formData, time: val })}
                                            options={timeSlots.map(t => ({ value: t, label: t }))}
                                            placeholder="Pilih Jam"
                                            icon={<Clock size={20} />}
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className={labelClasses}>Jumlah Orang</label>
                                        <div className={`flex items-center gap-4 border-2 border-espresso/10 rounded-xl p-2 w-full transition-colors hover:border-tobacco/30 bg-white h-[60px]`}>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, pax: Math.max(1, formData.pax - 1) })}
                                                className="h-full aspect-square rounded-lg bg-cream/50 text-espresso hover:bg-tobacco hover:text-white flex items-center justify-center text-xl transition-colors"
                                            >
                                                -
                                            </button>
                                            <div className="flex-1 flex flex-col items-center justify-center h-full">
                                                <span className="text-xl font-display font-medium leading-none">{formData.pax}</span>
                                                <span className="text-[10px] uppercase tracking-widest text-espresso/40 font-bold">Orang</span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, pax: formData.pax + 1 })}
                                                className="h-full aspect-square rounded-lg bg-cream/50 text-espresso hover:bg-tobacco hover:text-white flex items-center justify-center text-xl transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Part 3: Contact & Notes */}
                            <div className="mb-12">
                                <h3 className="font-display text-2xl mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-tobacco text-white flex items-center justify-center text-sm font-bold">3</span>
                                    Informasi Kontak
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClasses}>Nama Lengkap</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Masukkan nama anda"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Nomor WhatsApp</label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            required
                                            placeholder="0812xxxx"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className={labelClasses}>Alamat Email (Opsional)</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email@anda.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={inputClasses}
                                        />
                                        <p className="text-xs text-espresso/40 mt-1">*Tiket reservasi akan dikirim melalui email ini.</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className={labelClasses}>Catatan Khusus (Opsional)</label>
                                        <textarea
                                            name="notes"
                                            rows={3}
                                            placeholder="Misal: Saya butuh kursi bayi, atau ini untuk kejutan ulang tahun."
                                            value={formData.notes}
                                            onChange={handleChange}
                                            className={`${inputClasses} resize-none`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Terms & Submit */}
                            <div className="border-t border-espresso/10 pt-8">
                                <RevealButton
                                    variant="secondary"
                                    className="w-full justify-center text-lg py-5 bg-espresso text-cream hover:bg-espresso/90 border-espresso"
                                >
                                    Konfirmasi Reservasi
                                </RevealButton>

                                <p className="text-sm text-espresso/60 text-center mt-6 max-w-2xl mx-auto">
                                    Dengan melakukan reservasi, Anda menyetujui <span className="text-tobacco font-bold cursor-pointer hover:underline">Syarat & Ketentuan</span> kami.
                                    Reservasi berlaku setelah Anda menerima konfirmasi WhatsApp dari tim kami.
                                </p>

                                <div className="mt-8 flex justify-center gap-6 text-sm font-bold text-tobacco">
                                    <a href="https://wa.me/6281216312645" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-espresso transition-colors">
                                        <MessageCircle size={18} /> Butuh Bantuan via WA
                                    </a>
                                    <a href="https://instagram.com/j.mahiswara_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-espresso transition-colors">
                                        <Instagram size={18} /> Hubungi via DM
                                    </a>
                                </div>
                            </div>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-2xl mx-auto"
                        >
                            <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 text-success">
                                ✓
                            </div>
                            <h2 className="font-display text-4xl mb-4 text-espresso">Permintaan Diterima!</h2>
                            <p className="font-editorial text-xl text-espresso/70 mb-8">
                                Terima kasih, {formData.name}.<br />
                                Tim kami akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi ketersediaan meja.
                            </p>
                            <div className="p-6 bg-cream/30 rounded-xl mb-8 text-left inline-block w-full">
                                <h4 className="font-bold text-espresso uppercase tracking-widest text-xs mb-4">Ringkasan Reservasi</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm text-espresso/80">
                                    <div>
                                        <span className="block text-espresso/40 text-xs">Lokasi</span>
                                        {branches.find(b => b.id === formData.branch)?.name || "Kopipi Branch"}
                                    </div>
                                    <div>
                                        <span className="block text-espresso/40 text-xs">Tipe</span>
                                        {reservationTypes.find(t => t.id === formData.type)?.label}
                                    </div>
                                    <div>
                                        <span className="block text-espresso/40 text-xs">Jadwal</span>
                                        {formData.date}, {formData.time}
                                    </div>
                                    <div>
                                        <span className="block text-espresso/40 text-xs">Pax</span>
                                        {formData.pax} Orang
                                    </div>
                                </div>
                            </div>
                            <RevealButton href="/" variant="outline">
                                Kembali ke Beranda
                            </RevealButton>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
