import { Section } from "../ui/Section";
import { AboutText } from "./AboutText";
import { Technologies } from "./Technologies";

export function AboutSection() {
	return (
		<Section id="about">
			<AboutText />
			<Technologies />
		</Section>
	);
}
