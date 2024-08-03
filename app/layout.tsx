import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Blake Engquist",
	description: "Senior Frontend Engineer",
	keywords: [
		"blake",
		"engquist",
		"software",
		"frontend",
		"engineer",
		"web",
		"developer",
		"react",
		"typescript",
		"javascript",
		"nextjs",
		"tailwindcss",
		"mui",
		"css",
		"html",
		"jest",
		"testing",
		"library",
		"cypress",
		"i18n",
		"l10n",
		"ada",
		"storybook",
		"styled",
		"components",
		"aws",
		"insight",
		"global",
		"ncr",
		"voyix",
		"eventology",
		"fan",
		"guru",
		"devmountain",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
