import { MenuItem, menuItems } from "@/data/menu";

export type MatchCriteria = {
    mood: string;
    taste: string;
    time: string;
};

export const findBestMatches = (criteria: MatchCriteria): MenuItem[] => {
    const scoredItems = menuItems.map((item) => {
        let score = 0;

        // Check mood match
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (item.matcherTags.mood.includes(criteria.mood as any)) {
            score += 3;
        }

        // Check taste match
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (item.matcherTags.taste.includes(criteria.taste as any)) {
            score += 5; // Taste is most important
        }

        // Check time match
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (item.matcherTags.time.includes(criteria.time as any)) {
            score += 2;
        }

        return { item, score };
    });

    // Sort by score descending
    scoredItems.sort((a, b) => b.score - a.score);

    // Return top 3
    return scoredItems.slice(0, 3).map((result) => result.item);
};
