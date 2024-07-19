import { create } from 'zustand';

interface useHashtagStore {
  hashtag: string;
  setHashtag: (tag: string) => void;
}

export const useHashtagStore = create<useHashtagStore>((set) => ({
  hashtag: null,
  setHashtag: (tag) => set((state) => ({ hashtag: (state.hashtag = tag) })),
}));
