import { Section } from "../ui/Section";
import { ExperienceCard } from "./ExperienceCard";
import { experience } from "./data";

export function ExperienceSection() {
	return (
		<Section id="experience">
			<ul className="flex flex-col gap-12">
				{experience.map((experience) => (
					<ExperienceCard key={experience.company} experience={experience} />
				))}
			</ul>
		</Section>
	);
}
