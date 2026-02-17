export interface MenuItem {
    id: string;
    name: string;
    category: 'espresso' | 'non-espresso' | 'manual-brew' | 'food' | 'signature';
    price: number;
    description: string;
    image: string;
    tags: string[];
    flavorProfile: {
        bitter: number;
        sour: number;
        sweet: number;
        body: number;
        aroma: number;
        aftertaste: number;
    };
    matcherTags: {
        mood: ('santai' | 'fokus' | 'hangout' | 'suram')[];
        taste: ('pahit' | 'manis' | 'asam' | 'creamy')[];
        time: ('pagi' | 'siang' | 'sore' | 'malam')[];
    };
    available: boolean;
    featured?: boolean;
}

export const menuItems: MenuItem[] = [
    // Espresso Based
    {
        id: 'e1',
        name: 'Kopipi Signature Latte',
        category: 'espresso',
        price: 32000,
        description: 'Espresso blend house dengan susu fresh milk dan gula aren organik rahasia.',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop',
        tags: ['bestseller', 'recommended'],
        flavorProfile: { bitter: 4, sour: 2, sweet: 6, body: 7, aroma: 8, aftertaste: 7 },
        matcherTags: { mood: ['santai', 'hangout'], taste: ['manis', 'creamy'], time: ['siang', 'sore'] },
        available: true,
        featured: true
    },
    {
        id: 'e2',
        name: 'Classic Americano',
        category: 'espresso',
        price: 24000,
        description: 'Double shot espresso dengan air panas. Tegas, bersih, dan membangkitkan semangat.',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=987&auto=format&fit=crop',
        tags: ['classic'],
        flavorProfile: { bitter: 8, sour: 4, sweet: 0, body: 4, aroma: 9, aftertaste: 6 },
        matcherTags: { mood: ['fokus', 'suram'], taste: ['pahit'], time: ['pagi'] },
        available: true
    },
    {
        id: 'e3',
        name: 'Cappuccino',
        category: 'espresso',
        price: 30000,
        description: 'Keseimbangan sempurna espresso, susu steam, dan foam tebal.',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=935&auto=format&fit=crop',
        tags: ['classic'],
        flavorProfile: { bitter: 5, sour: 2, sweet: 3, body: 6, aroma: 7, aftertaste: 6 },
        matcherTags: { mood: ['santai', 'fokus'], taste: ['creamy'], time: ['pagi', 'sore'] },
        available: true
    },
    {
        id: 'e4',
        name: 'Flat White',
        category: 'espresso',
        price: 30000,
        description: 'Espresso dengan microfoam susu yang halus dan velvety. Lebih kuat dari latte.',
        image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=1000&auto=format&fit=crop',
        tags: [],
        flavorProfile: { bitter: 6, sour: 3, sweet: 3, body: 7, aroma: 7, aftertaste: 7 },
        matcherTags: { mood: ['fokus', 'santai'], taste: ['creamy', 'pahit'], time: ['pagi', 'siang'] },
        available: true
    },
    {
        id: 'e5',
        name: 'Piccolo',
        category: 'espresso',
        price: 28000,
        description: 'Ristretto shot dengan sedikit susu steam. Kecil tapi nendang.',
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=988&auto=format&fit=crop',
        tags: [],
        flavorProfile: { bitter: 7, sour: 4, sweet: 2, body: 5, aroma: 8, aftertaste: 6 },
        matcherTags: { mood: ['fokus'], taste: ['pahit'], time: ['siang'] },
        available: true
    },
    {
        id: 'e6',
        name: 'Mocha',
        category: 'espresso',
        price: 35000,
        description: 'Perpaduan espresso, cokelat premium, dan susu steam.',
        image: 'https://images.unsplash.com/photo-1596009761559-05244956a8fb?q=80&w=1000&auto=format&fit=crop',
        tags: ['sweet'],
        flavorProfile: { bitter: 4, sour: 1, sweet: 7, body: 8, aroma: 7, aftertaste: 8 },
        matcherTags: { mood: ['suram', 'santai'], taste: ['manis', 'creamy'], time: ['sore', 'malam'] },
        available: true
    },
    {
        id: 'e7',
        name: 'Caramel Macchiato',
        category: 'espresso',
        price: 36000,
        description: 'Vanilla syrup, susu steam, espresso, dan saus karamel di atasnya.',
        image: 'https://images.unsplash.com/photo-1485808191679-5f8c7c41f7bc?q=80&w=988&auto=format&fit=crop',
        tags: ['sweet'],
        flavorProfile: { bitter: 3, sour: 1, sweet: 9, body: 7, aroma: 6, aftertaste: 8 },
        matcherTags: { mood: ['santai', 'hangout'], taste: ['manis'], time: ['siang', 'sore'] },
        available: true
    },
    {
        id: 'e8',
        name: 'Affogato',
        category: 'espresso',
        price: 32000,
        description: 'Satu scoop vanilla ice cream disiram double shot espresso panas.',
        image: 'https://images.unsplash.com/photo-1517216669926-2c9ff5d666fd?q=80&w=1000&auto=format&fit=crop',
        tags: ['dessert'],
        flavorProfile: { bitter: 6, sour: 2, sweet: 8, body: 9, aroma: 7, aftertaste: 9 },
        matcherTags: { mood: ['suram', 'santai'], taste: ['manis', 'pahit'], time: ['siang', 'sore'] },
        available: true
    },

    // Manual Brew
    {
        id: 'm1',
        name: 'V60 Pour Over',
        category: 'manual-brew',
        price: 32000,
        description: 'Seduhan manual dengan filter kertas untuk rasa yang bersih dan menonjolkan karakter biji.',
        image: 'https://images.unsplash.com/photo-1544498579-3c359d95f87b?q=80&w=1000&auto=format&fit=crop',
        tags: ['specialty'],
        flavorProfile: { bitter: 3, sour: 7, sweet: 5, body: 3, aroma: 9, aftertaste: 8 },
        matcherTags: { mood: ['santai', 'fokus'], taste: ['asam'], time: ['pagi', 'siang'] },
        available: true
    },
    {
        id: 'm2',
        name: 'Japanese Cold Brew',
        category: 'manual-brew',
        price: 35000,
        description: 'Seduhan langsung di atas es. Segar, fruity, dan aromatik.',
        image: 'https://images.unsplash.com/photo-1517080277259-3a3f5b0c7974?q=80&w=1000&auto=format&fit=crop',
        tags: ['refreshing'],
        flavorProfile: { bitter: 2, sour: 8, sweet: 4, body: 3, aroma: 8, aftertaste: 9 },
        matcherTags: { mood: ['santai', 'hangout'], taste: ['asam', 'manis'], time: ['siang'] },
        available: true,
        featured: true
    },
    {
        id: 'm3',
        name: 'Aeropress',
        category: 'manual-brew',
        price: 30000,
        description: 'Metode tekan udara untuk hasil yang full body namun tetap bersih.',
        image: 'https://images.unsplash.com/photo-1510618037042-83b6cb598f82?q=80&w=1000&auto=format&fit=crop',
        tags: [],
        flavorProfile: { bitter: 4, sour: 5, sweet: 5, body: 6, aroma: 7, aftertaste: 7 },
        matcherTags: { mood: ['fokus'], taste: ['pahit', 'asam'], time: ['pagi'] },
        available: true
    },
    {
        id: 'm4',
        name: 'French Press',
        category: 'manual-brew',
        price: 28000,
        description: 'Metode rendam klasik. Kaya rasa, berminyak, dan heavy body.',
        image: 'https://images.unsplash.com/photo-1563805096-7bb6f71d1558?q=80&w=1000&auto=format&fit=crop',
        tags: [],
        flavorProfile: { bitter: 6, sour: 3, sweet: 4, body: 9, aroma: 6, aftertaste: 7 },
        matcherTags: { mood: ['santai'], taste: ['pahit'], time: ['pagi'] },
        available: true
    },
    {
        id: 'm5',
        name: 'Vietnam Drip',
        category: 'manual-brew',
        price: 25000,
        description: 'Kopi robusta pekat yang menetes perlahan ke atas susu kental manis.',
        image: 'https://images.unsplash.com/photo-1628156173003-87ae48f0653d?q=80&w=1000&auto=format&fit=crop',
        tags: ['traditional'],
        flavorProfile: { bitter: 8, sour: 1, sweet: 9, body: 8, aroma: 6, aftertaste: 8 },
        matcherTags: { mood: ['santai'], taste: ['manis', 'pahit'], time: ['sore', 'malam'] },
        available: true
    },

    // Signature
    {
        id: 's1',
        name: 'Es Kopi Susu Gula Aren',
        category: 'signature',
        price: 22000,
        description: 'Kearifan lokal dalam segelas es kopi. Manis legit dan creamy.',
        image: 'https://images.unsplash.com/photo-1623955635831-7b79cc158bf3?q=80&w=1000&auto=format&fit=crop',
        tags: ['bestseller'],
        flavorProfile: { bitter: 3, sour: 1, sweet: 8, body: 7, aroma: 6, aftertaste: 7 },
        matcherTags: { mood: ['santai', 'hangout'], taste: ['manis', 'creamy'], time: ['siang', 'sore'] },
        available: true
    },
    {
        id: 's2',
        name: 'Klepon Latte',
        category: 'signature',
        price: 35000,
        description: 'Rasa jajanan pasar favorit. Pandan, kelapa, gula merah, dan kopi.',
        image: 'https://images.unsplash.com/photo-1511529141026-6b222304892c?q=80&w=1000&auto=format&fit=crop',
        tags: ['unique'],
        flavorProfile: { bitter: 2, sour: 1, sweet: 8, body: 7, aroma: 9, aftertaste: 8 },
        matcherTags: { mood: ['suram', 'santai'], taste: ['manis', 'creamy'], time: ['sore'] },
        available: true
    },
    {
        id: 's3',
        name: 'Sea Salt Caramel Latte',
        category: 'signature',
        price: 38000,
        description: 'Perpaduan manis karamel dan gurih sea salt cream yang unik.',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b5c7fa69?q=80&w=1000&auto=format&fit=crop',
        tags: [],
        flavorProfile: { bitter: 3, sour: 1, sweet: 7, body: 8, aroma: 7, aftertaste: 8 },
        matcherTags: { mood: ['santai'], taste: ['manis', 'creamy'], time: ['siang'] },
        available: true
    },
    {
        id: 's4',
        name: 'Charcoal Latte',
        category: 'signature',
        price: 35000,
        description: 'Activated charcoal dengan susu dan sedikit vanilla. Detoks yang nikmat.',
        image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1000&auto=format&fit=crop',
        tags: ['healthy'],
        flavorProfile: { bitter: 2, sour: 0, sweet: 5, body: 6, aroma: 4, aftertaste: 5 },
        matcherTags: { mood: ['santai'], taste: ['creamy'], time: ['malam'] },
        available: true
    },
    {
        id: 's5',
        name: 'Dirty Matcha',
        category: 'signature',
        price: 36000,
        description: 'Matcha latte jepang asli dituang satu shot espresso di atasnya.',
        image: 'https://images.unsplash.com/photo-1536768138545-56832dbb777a?q=80&w=1000&auto=format&fit=crop',
        tags: ['fusion'],
        flavorProfile: { bitter: 6, sour: 1, sweet: 4, body: 7, aroma: 8, aftertaste: 7 },
        matcherTags: { mood: ['fokus', 'santai'], taste: ['pahit', 'creamy'], time: ['siang'] },
        available: true
    },
    {
        id: 's6',
        name: 'Ginger Bread Latte',
        category: 'signature',
        price: 35000,
        description: 'Hangatnya jahe dan rempah dalam kopi susu yang creamy.',
        image: 'https://images.unsplash.com/photo-1512404068305-64bc699478f6?q=80&w=1000&auto=format&fit=crop',
        tags: ['seasonal'],
        flavorProfile: { bitter: 4, sour: 1, sweet: 6, body: 6, aroma: 9, aftertaste: 8 },
        matcherTags: { mood: ['suram', 'santai'], taste: ['manis', 'creamy'], time: ['malam'] },
        available: true
    },
    {
        id: 's7',
        name: 'Rose Pistachio Latte',
        category: 'signature',
        price: 39000,
        description: 'Aroma mawar yang elegan dengan gurih kacang pistachio.',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop',
        tags: ['premium'],
        flavorProfile: { bitter: 3, sour: 1, sweet: 6, body: 7, aroma: 10, aftertaste: 9 },
        matcherTags: { mood: ['santai'], taste: ['manis', 'creamy'], time: ['sore'] },
        available: true
    },

    // Non-Espresso
    {
        id: 'n1',
        name: 'Classic Matcha Latte',
        category: 'non-espresso',
        price: 32000,
        description: 'Uji Matcha premium dari Jepang dengan susu fresh milk.',
        image: 'https://images.unsplash.com/photo-1515825838458-f2a94b20105a?q=80&w=1000&auto=format&fit=crop',
        tags: ['bestseller'],
        flavorProfile: { bitter: 5, sour: 0, sweet: 5, body: 6, aroma: 8, aftertaste: 7 },
        matcherTags: { mood: ['santai', 'fokus'], taste: ['creamy', 'pahit'], time: ['siang', 'malam'] },
        available: true
    },
    {
        id: 'n2',
        name: 'Signature Chocolate',
        category: 'non-espresso',
        price: 30000,
        description: 'Cokelat Belgia pekat, tidak terlalu manis, sangat nyoklat.',
        image: 'https://images.unsplash.com/photo-1542488246-adfaa6342e3f?q=80&w=1000&auto=format&fit=crop',
        tags: ['kids-friendly'],
        flavorProfile: { bitter: 4, sour: 0, sweet: 7, body: 8, aroma: 9, aftertaste: 8 },
        matcherTags: { mood: ['suram', 'santai'], taste: ['manis', 'creamy'], time: ['malam'] },
        available: true
    },
    {
        id: 'n3',
        name: 'Taro Latte',
        category: 'non-espresso',
        price: 28000,
        description: 'Rasa ubi ungu yang khas, manis, dan creamy.',
        image: 'https://images.unsplash.com/photo-1536768138545-56832dbb777a?q=80&w=1000&auto=format&fit=crop',
        tags: [],
        flavorProfile: { bitter: 0, sour: 0, sweet: 8, body: 6, aroma: 7, aftertaste: 6 },
        matcherTags: { mood: ['santai'], taste: ['manis'], time: ['sore'] },
        available: true
    },
    {
        id: 'n4',
        name: 'Strawberry Milkshake',
        category: 'non-espresso',
        price: 32000,
        description: 'Susu segar dengan selai stroberi asli buatan sendiri.',
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1000&auto=format&fit=crop',
        tags: ['kids-friendly'],
        flavorProfile: { bitter: 0, sour: 3, sweet: 9, body: 8, aroma: 8, aftertaste: 7 },
        matcherTags: { mood: ['hangout'], taste: ['manis', 'asam'], time: ['siang'] },
        available: true
    },
    {
        id: 'n5',
        name: 'Vanilla Milkshake',
        category: 'non-espresso',
        price: 30000,
        description: 'Klasik vanilla milkshake dengan biji vanilla asli.',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1000&auto=format&fit=crop',
        tags: [],
        flavorProfile: { bitter: 0, sour: 0, sweet: 9, body: 8, aroma: 7, aftertaste: 6 },
        matcherTags: { mood: ['hangout'], taste: ['manis'], time: ['siang'] },
        available: true
    },

    // Food
    {
        id: 'f1',
        name: 'Butter Croissant',
        category: 'food',
        price: 22000,
        description: 'Renyah di luar, lembut dan berongga di dalam. Menggunakan butter Prancis.',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop',
        tags: ['bakery'],
        flavorProfile: { bitter: 0, sour: 0, sweet: 3, body: 5, aroma: 9, aftertaste: 5 },
        matcherTags: { mood: ['santai'], taste: ['manis'], time: ['pagi'] },
        available: true,
        featured: true
    },
    {
        id: 'f2',
        name: 'Avocado Toast',
        category: 'food',
        price: 45000,
        description: 'Roti sourdough panggang, alpukat smashed, poached egg, dan taburan dukkah.',
        image: 'https://images.unsplash.com/photo-1588137372308-15f75323ca8d?q=80&w=1000&auto=format&fit=crop',
        tags: ['healthy', 'breakfast'],
        flavorProfile: { bitter: 0, sour: 1, sweet: 2, body: 6, aroma: 5, aftertaste: 5 },
        matcherTags: { mood: ['fokus'], taste: ['creamy'], time: ['pagi'] },
        available: true
    },
    {
        id: 'f3',
        name: 'Classic French Toast',
        category: 'food',
        price: 38000,
        description: 'Roti brioche tebal, kayu manis, maple syrup, dan buah beri segar.',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1000&auto=format&fit=crop',
        tags: ['dessert'],
        flavorProfile: { bitter: 0, sour: 1, sweet: 8, body: 7, aroma: 9, aftertaste: 7 },
        matcherTags: { mood: ['suram', 'santai'], taste: ['manis'], time: ['pagi', 'sore'] },
        available: true
    },
    {
        id: 'f4',
        name: 'Banana Cake',
        category: 'food',
        price: 25000,
        description: 'Bolu pisang moist dengan potongan walnut dan hint kayu manis.',
        image: 'https://images.unsplash.com/photo-1629002220979-4592a370e28f?q=80&w=1000&auto=format&fit=crop',
        tags: ['snack'],
        flavorProfile: { bitter: 0, sour: 0, sweet: 7, body: 6, aroma: 8, aftertaste: 6 },
        matcherTags: { mood: ['santai'], taste: ['manis'], time: ['sore'] },
        available: true
    },
    {
        id: 'f5',
        name: 'Truffle Egg Toast',
        category: 'food',
        price: 55000,
        description: 'Scrambled egg creamy dengan minyak truffle di atas roti brioche panggang.',
        image: 'https://images.unsplash.com/photo-1525351462161-d21d26b08f3d?q=80&w=1000&auto=format&fit=crop',
        tags: ['savory', 'breakfast'],
        flavorProfile: { bitter: 0, sour: 0, sweet: 2, body: 8, aroma: 10, aftertaste: 8 },
        matcherTags: { mood: ['fokus'], taste: ['creamy'], time: ['pagi'] },
        available: true
    }
];
