"use client";

import { AboutSection } from "./about/AboutSection";
import { ContactSection } from "./contact/ContactSection";
import { ExperienceSection } from "./experience/ExperienceSection";
import { Header } from "./header/Header";
import { useNavObserver } from "./hooks/useNavObserver";

export function App() {
	const { activeSection } = useNavObserver();

	return (
		<div className="flex min-h-screen justify-center px-16">
			<div className="flex gap-48 w-full max-w-6xl">
				<Header activeSection={activeSection} />
				<main className="w-full flex flex-col py-14">
					<AboutSection />
					<ExperienceSection />
					<ContactSection />
				</main>
			</div>
		</div>
	);
}
