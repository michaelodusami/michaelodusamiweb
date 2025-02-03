"use client";

import { createContext, ReactNode, useState } from "react";

interface NavContectType {
	activeNav: string;
	setActiveNav: (label: string) => void;
}

export const NavContext = createContext<NavContectType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
	const [activeNav, setActiveNav] = useState<string>("About Me");

	return (
		<NavContext.Provider value={{ activeNav, setActiveNav }}>{children}</NavContext.Provider>
	);
}
