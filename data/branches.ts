export interface Branch {
    id: string;
    name: string;
    area: string;
    address: string;
    phone: string;
    email: string;
    hours: {
        weekday: string;
        weekend: string;
    };
    mapThumbnail: string; // Unsplash URL (gambar area/suasana)
    heroImage: string;    // Unsplash URL interior
    peakHours: {
        hour: string;
        visitors: number;
    }[];
    amenities: string[];
    coordinates: {
        lat: number;
        lng: number;
    };
}

export const branches: Branch[] = [
    {
        id: 'b1',
        name: 'Kopipi Tunjungan',
        area: 'Surabaya Pusat',
        address: 'Jl. Tunjungan No. 45, Surabaya',
        phone: '+62 812 1631 2645',
        email: 'kopipi@gmail.com',
        hours: {
            weekday: '07:00 – 22:00',
            weekend: '07:00 – 23:00'
        },
        mapThumbnail: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop',
        peakHours: [
            { hour: '08:00', visitors: 45 },
            { hour: '10:00', visitors: 60 },
            { hour: '12:00', visitors: 85 },
            { hour: '14:00', visitors: 50 },
            { hour: '16:00', visitors: 70 },
            { hour: '18:00', visitors: 90 },
            { hour: '20:00', visitors: 80 }
        ],
        amenities: ['WiFi', 'AC', 'Meeting Room', 'Smoking Area'],
        coordinates: { lat: -7.2600, lng: 112.7380 }
    },
    {
        id: 'b2',
        name: 'Kopipi Citraland',
        area: 'Surabaya Barat',
        address: 'G-Walk Citraland, Ruko Taman Gapura, Surabaya',
        phone: '+62 812 1631 2645',
        email: 'kopipi@gmail.com',
        hours: {
            weekday: '08:00 – 22:00',
            weekend: '08:00 – 23:00'
        },
        mapThumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000&auto=format&fit=crop',
        peakHours: [
            { hour: '08:00', visitors: 30 },
            { hour: '10:00', visitors: 40 },
            { hour: '12:00', visitors: 60 },
            { hour: '14:00', visitors: 45 },
            { hour: '16:00', visitors: 80 },
            { hour: '18:00', visitors: 95 },
            { hour: '20:00', visitors: 70 }
        ],
        amenities: ['WiFi', 'AC', 'Parking', 'Outdoor Garden'],
        coordinates: { lat: -7.2900, lng: 112.6400 }
    },
    {
        id: 'b3',
        name: 'Kopipi Rungkut',
        area: 'Surabaya Timur',
        address: 'Jl. Rungkut Madya No. 88, Surabaya',
        phone: '+62 812 1631 2645',
        email: 'kopipi@gmail.com',
        hours: {
            weekday: '08:00 – 23:00',
            weekend: '08:00 – 24:00'
        },
        mapThumbnail: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop',
        peakHours: [
            { hour: '08:00', visitors: 20 },
            { hour: '10:00', visitors: 50 },
            { hour: '12:00', visitors: 70 },
            { hour: '14:00', visitors: 90 },
            { hour: '16:00', visitors: 85 },
            { hour: '18:00', visitors: 60 },
            { hour: '20:00', visitors: 100 }
        ],
        amenities: ['WiFi', 'AC', 'Co-working Space', 'Mushola'],
        coordinates: { lat: -7.3100, lng: 112.7800 }
    },
    {
        id: 'b4',
        name: 'Kopipi Sidoarjo',
        area: 'Sidoarjo Kota',
        address: 'Jl. Pahlawan No. 10, Sidoarjo',
        phone: '+62 812 1631 2645',
        email: 'kopipi@gmail.com',
        hours: {
            weekday: '09:00 – 22:00',
            weekend: '09:00 – 23:00'
        },
        mapThumbnail: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&w=1000&auto=format&fit=crop',
        peakHours: [
            { hour: '08:00', visitors: 15 },
            { hour: '10:00', visitors: 30 },
            { hour: '12:00', visitors: 55 },
            { hour: '14:00', visitors: 40 },
            { hour: '16:00', visitors: 65 },
            { hour: '18:00', visitors: 80 },
            { hour: '20:00', visitors: 60 }
        ],
        amenities: ['WiFi', 'AC', 'Parking', 'Family Area'],
        coordinates: { lat: -7.4500, lng: 112.7100 }
    },
    {
        id: 'b5',
        name: 'Kopipi Malang',
        area: 'Malang Kota',
        address: 'Jl. Ijen Besar No. 5, Malang',
        phone: '+62 812 1631 2645',
        email: 'kopipi@gmail.com',
        hours: {
            weekday: '07:00 – 22:00',
            weekend: '07:00 – 23:00'
        },
        mapThumbnail: 'https://images.unsplash.com/photo-1497292403196-691552684048?q=80&w=1000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop',
        peakHours: [
            { hour: '08:00', visitors: 40 },
            { hour: '10:00', visitors: 70 },
            { hour: '12:00', visitors: 90 },
            { hour: '14:00', visitors: 80 },
            { hour: '16:00', visitors: 95 },
            { hour: '18:00', visitors: 85 },
            { hour: '20:00', visitors: 60 }
        ],
        amenities: ['WiFi', 'AC', 'Fireplace', 'Garden'],
        coordinates: { lat: -7.9700, lng: 112.6300 }
    }
];
