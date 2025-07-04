import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Michael Odusami | iOS Engineer",
	description: "iOS Engineer and content creator passionate about continuous learning. Portfolio showcasing mobile development projects and technical content.",
	keywords: ["iOS Engineer", "Swift", "SwiftUI", "Mobile Development", "Portfolio"],
	authors: [{ name: "Michael Odusami" }],
	creator: "Michael Odusami",
	openGraph: {
		title: "Michael Odusami | iOS Engineer",
		description: "iOS Engineer and content creator passionate about continuous learning.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Michael Odusami | iOS Engineer",
		description: "iOS Engineer and content creator passionate about continuous learning.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={poppins.variable}>
			<body className="min-h-screen bg-background font-sans antialiased">
				<div className="flex min-h-screen flex-col">
					<Header />
					<main className="flex-1">
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
