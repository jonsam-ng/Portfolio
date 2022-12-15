import { createContext } from "@builder.io/qwik";

export interface SiteStore {
	sideMenuOpen: boolean;
}

export const GlobalStore = createContext<SiteStore>("site-store");
