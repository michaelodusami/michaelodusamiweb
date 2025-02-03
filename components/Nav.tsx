"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNav } from "@/provider/useNav";

import { Briefcase, User, FileText } from "lucide-react";

const navItems = [
	{ icon: User, label: "About Me" },
	{ icon: Briefcase, label: "Projects" },
	{ icon: FileText, label: "Resume" },
	// { icon: Monitor, label: "Skills" },
	// { icon: Search, label: "Explore" },
	// { icon: PhoneCall, label: "Contact" },
];

export function Nav() {
	const { activeNav, handleSetActiveNav } = useNav();

	return (
		<nav
			className={cn(
				"flex flex-col space-y-2 h-screen bg-background fixed left-0 top-0 bottom-0 w-16 py-4 border-r"
			)}
		>
			{navItems.map(({ icon: Icon, label }) => (
				<div key={label} className="relative group">
					<Button
						variant="ghost"
						size="icon"
						className={cn(
							"w-full h-16 rounded-none group-hover:bg-muted transition-colors",
							activeNav === label && "bg-muted"
						)}
						onClick={() => handleSetActiveNav(label)}
					>
						<Icon className="h-5 w-5" />
						<span className="sr-only">{label}</span>
					</Button>

					{/* Tooltip */}
					<div className="absolute left-full top-1/2-translate-y-1/2 ml-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
						{label}
					</div>
				</div>
			))}
		</nav>
	);
}
