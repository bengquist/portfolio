"use client";

import { AboutSection } from "./about/AboutSection";
import { ExperienceSection } from "./experience/ExperienceSection";
import { Header } from "./header/Header";
import { useNavObserver } from "./hooks/useNavObserver";

export function App() {
	const { activeSection } = useNavObserver();

	return (
		<div className="flex min-h-screen justify-center px-8 lg:px-16">
			<div className="flex flex-col lg:flex-row lg:gap-48 w-full max-w-6xl">
				<Header activeSection={activeSection} />
				<main className="w-full flex flex-col lg:py-14">
					<AboutSection />
					<ExperienceSection />
				</main>
			</div>
		</div>
	);
}
