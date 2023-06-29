import { create } from "zustand";

interface AuthStore {
	isAuthenticated: boolean;
	setIsAuthenticated: (newState: boolean) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
	isAuthenticated: false,
	setIsAuthenticated: (newState) =>
		set(() => ({ isAuthenticated: newState })),
}));
