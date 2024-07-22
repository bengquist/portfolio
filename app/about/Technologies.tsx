import { TechnologyCard } from "./TechnologyCard";
import { technologies } from "./data";

export function Technologies() {
	return (
		<ul className="flex flex-wrap justify-center gap-12">
			{technologies.map(({ Icon, name }) => (
				<TechnologyCard key={name} Icon={Icon} name={name} />
			))}
		</ul>
	);
}
