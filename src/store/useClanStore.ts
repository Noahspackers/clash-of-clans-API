import { Clan } from 'clashofclans.js';
import { create } from 'zustand';
import axios from 'axios';

interface ClanStore {
    clans: Record<string, Clan>;
    loadingTags: Set<string>;
    errorTags: Set<string>;
    getClan: (tag: string) => Clan | null;
    fetchClan: (tag: string) => Promise<void>;
}

export const useClanStore = create<ClanStore>((set, get) => ({
    clans: {},
    loadingTags: new Set(),
    errorTags: new Set(),
    getClan: (tag) => get().clans[tag] || null,
    fetchClan: async (tag: string) => {
        const { clans, loadingTags } = get();
        if(clans[tag] || loadingTags.has(tag)) return;

        set((state) => ({
            loadingTags: new Set(state.loadingTags).add(tag),
        }));

        try {
            const clan = await axios.get<Clan>(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(tag)}`, {
                headers: {
                    'Authorization': `Bearer ${process.env.COC_API_KEY}`,
                },
            }).then(response => response.data);

            if(!clan) throw new Error("Clan not found");

            set((state) => ({
                clans: {
                    ...state.clans,
                    [tag]: clan,
                },
                loadingTags: (() => {
                    const updatedSet = new Set(state.loadingTags);
                    updatedSet.delete(tag);
                    return updatedSet;
                })(),
            }));
        } catch (error) {
            console.error(`Error fetching clan with tag ${tag}:`, error);
            set((state) => ({
                loadingTags: (() => {
                    const updatedSet = new Set(state.loadingTags);
                    updatedSet.delete(tag);
                    return updatedSet;
                })(),
                errorTags: new Set(state.errorTags).add(tag),
            }));
        }
    },  
})); 
