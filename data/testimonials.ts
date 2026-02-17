export interface Testimonial {
    id: string;
    name: string;
    avatar: string; // Unsplash URL portrait
    branchId: string; // relasi ke branches.ts
    rating: number; // 1–5
    review: string;
    date: string; // "2024-11-12"
    tags: string[]; // ['atmosphere', 'coffee', 'service', dll]
    featured: boolean;
}

export const testimonials: Testimonial[] = [
    // Tunjungan
    {
        id: 't1',
        name: 'Sari Handayani',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b1',
        rating: 5,
        review: 'Tempatnya estetik banget di tengah kota. Kopi signature-nya juara!',
        date: '2024-01-15',
        tags: ['atmosphere', 'coffee'],
        featured: true
    },
    {
        id: 't2',
        name: 'Budi Santoso',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b1',
        rating: 4,
        review: 'Enak buat kerja, wifinya kenceng. Cuma kalau sore agak ramai.',
        date: '2023-12-20',
        tags: ['service', 'atmosphere'],
        featured: false
    },
    {
        id: 't3',
        name: 'Citra Dewi',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b1',
        rating: 5,
        review: 'Baristanya ramah banget, dijelasin detail soal manual brewnya.',
        date: '2024-02-01',
        tags: ['service', 'coffee'],
        featured: false
    },

    // Citraland
    {
        id: 't4',
        name: 'Kevin Wijaya',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b2',
        rating: 5,
        review: 'Lokasi strategis di G-Walk. Parkir luas, cocok buat nongkrong malem.',
        date: '2024-01-25',
        tags: ['atmosphere', 'service'],
        featured: true
    },
    {
        id: 't5',
        name: 'Lina Marlina',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b2',
        rating: 4,
        review: 'Makanannya enak-enak, terutama croissant-nya. Kopinya standar tapi oke.',
        date: '2023-11-10',
        tags: ['food', 'coffee'],
        featured: false
    },
    {
        id: 't6',
        name: 'Doni Pratama',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b2',
        rating: 5,
        review: 'Tempat favorit buat meeting sama klien. Tenang dan nyaman.',
        date: '2024-02-05',
        tags: ['atmosphere', 'service'],
        featured: false
    },

    // Rungkut
    {
        id: 't7',
        name: 'Rina Kusuma',
        avatar: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b3',
        rating: 5,
        review: 'Sering ke sini karena dekat kampus. Harganya masih masuk akal buat mahasiswa.',
        date: '2023-12-05',
        tags: ['coffee', 'value'],
        featured: true
    },
    {
        id: 't8',
        name: 'Eko Prasetyo',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b3',
        rating: 4,
        review: 'AC dingin, colokan banyak. Pas banget buat ngerjain tugas.',
        date: '2024-01-12',
        tags: ['atmosphere', 'service'],
        featured: false
    },
    {
        id: 't9',
        name: 'Maya Indah',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b3',
        rating: 5,
        review: 'Signature chocolate-nya the best! Nggak terlalu manis.',
        date: '2024-02-10',
        tags: ['coffee', 'food'],
        featured: false
    },

    // Sidoarjo
    {
        id: 't10',
        name: 'Andi Saputra',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b4',
        rating: 5,
        review: 'Akhirnya ada coffee shop proper di Sidoarjo kota. Vibesnya dapet banget.',
        date: '2024-01-05',
        tags: ['atmosphere', 'coffee'],
        featured: true
    },
    {
        id: 't11',
        name: 'Siti Nurhaliza',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b4',
        rating: 4,
        review: 'Parkirnya kadang susah kalau lagi rame, tapi worth it sama kopinya.',
        date: '2023-12-15',
        tags: ['coffee', 'service'],
        featured: false
    },
    {
        id: 't12',
        name: 'Feri Irawan',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b4',
        rating: 5,
        review: 'V60-nya mantap, beans-nya ganti-ganti jadi nggak bosen.',
        date: '2024-01-30',
        tags: ['coffee', 'service'],
        featured: false
    },

    // Malang
    {
        id: 't13',
        name: 'Dian Sastro',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b5',
        rating: 5,
        review: 'Udaranya sejuk, kopinya hangat. Kombinasi sempurna di Ijen.',
        date: '2023-12-25',
        tags: ['atmosphere', 'coffee'],
        featured: true
    },
    {
        id: 't14',
        name: 'Joko Anwar',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b5',
        rating: 5,
        review: 'Desain interiornya berkelas. Musiknya juga enak, nggak berisik.',
        date: '2024-01-18',
        tags: ['atmosphere', 'music'],
        featured: false
    },
    {
        id: 't15',
        name: 'Putri Marino',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
        branchId: 'b5',
        rating: 4,
        review: 'Pilihan pastry-nya banyak dan fresh. Suka banget sama banana cake-nya.',
        date: '2024-02-14',
        tags: ['food', 'service'],
        featured: false
    }
];
