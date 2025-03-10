"use client";

import { createContext, ReactNode, useState } from "react";

interface NavContectType {
	activeNav: string;
	handleSetActiveNav: (str: string) => void;
}

export const NavContext = createContext<NavContectType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
	const [activeNav, setActiveNav] = useState<string>("Profile");

	const handleSetActiveNav = (str: string) => {
		if (str === "Resume") {
			if (typeof window !== "undefined") {
				window.open("/resume.pdf", "_blank"); // Adjust the path to your resume PDF file
			}
			return;
		}
		if (str === "Youtube") {
			if (typeof window !== "undefined") {
				window.open("https://www.youtube.com/@michaelodus", "_blank");
			}
			return
		}		
		setActiveNav(str);
	};

	return (
		<NavContext.Provider value={{ activeNav, handleSetActiveNav }}>
			{children}
		</NavContext.Provider>
	);
}
