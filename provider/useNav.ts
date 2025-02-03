"use client";
import { useContext } from "react";
import { NavContext } from "./NavProvider";

export function useNav() {
	const context = useContext(NavContext);
	if (!context) {
		throw new Error("useNav must be used within a NavProvider");
	}
	return context;
}
