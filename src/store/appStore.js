// src/store/appStore.js

import { create } from 'zustand';

export const useAppStore = create((set) => ({
    // state
    fullName: '',
    age: '',

    // actions
    setUserInfo: ({ fullName, age }) =>
        set(() => ({ fullName, age })),

    resetUser: () =>
        set(() => ({ fullName: '', age: '' })),
}));
