import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { NavProvider } from "@/provider/NavProvider";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

// const inter = Inter({
// 	subsets: ["latin"]
// })

const poppins = Poppins({
	subsets: ["latin"],
	weight: "400"
})


export const metadata: Metadata = {
	title: "ODUSAMI",
	description: "Michae;-Andre Odusami's Portfolio Site",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className}  antialiased min-h-screen`}>
				<div className="min-h-screen">
					{children}
				</div>
			</body>
		</html>
	);
}
