import { ExternalLinkIcon } from "../icons/ExternalLink";
import { TechnologyPill } from "./TechnologyPill";
import type { Experience } from "./types";

interface Props {
	experience: Experience;
}

export function ExperienceCard({
	experience: {
		startDate,
		endDate,
		title,
		company,
		description,
		technologies,
		url,
	},
}: Props) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			className="p-4 rounded-md bg-medium-blue group hover:!opacity-100 group-hover/list:opacity-50 transition-all"
		>
			<div className="flex gap-6">
				<p className="text-sm w-full whitespace-nowrap mt-1">
					{startDate} - {endDate}
				</p>
				<div className="flex flex-col gap-4">
					<div>
						<div className="flex justify-between items-center">
							<h3>{title}</h3>
							<ExternalLinkIcon color="yellow" />
						</div>
						<h4>{company}</h4>
					</div>
					<p className="text-sm">{description}</p>
					<ul className="flex gap-4">
						{technologies.map((technology) => (
							<TechnologyPill key={technology} name={technology} />
						))}
					</ul>
				</div>
			</div>
		</a>
	);
}
