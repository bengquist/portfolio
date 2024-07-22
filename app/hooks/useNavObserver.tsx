import { useEffect, useRef, useState } from "react";

export function useNavObserver() {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const about = document.getElementById("about");
		const experience = document.getElementById("experience");
		const contact = document.getElementById("contact");

		const sections = [experience, about, contact];

		const options = {
			threshold: 0.8,
		};

		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					switch (entry.target.id) {
						case "about":
							setActiveSection("about");
							break;
						case "experience":
							setActiveSection("experience");
							break;
						case "contact":
							setActiveSection("contact");
							break;
					}
				}
			}
		}, options);

		for (const section of sections) {
			if (section) {
				observer.observe(section);
			}
		}
	}, []);

	return { activeSection };
}
