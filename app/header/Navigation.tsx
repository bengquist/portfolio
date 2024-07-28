import { NavItem } from "./NavItem";
import { navLinks } from "./data";

interface Props {
	activeSection: string;
}

export function Navigation({ activeSection }: Props) {
	return (
		<nav>
			<ul className="flex flex-col gap-2">
				{navLinks.map(({ name, id }) => (
					<NavItem
						key={name}
						id={id}
						text={name}
						isActive={activeSection === id}
					/>
				))}
			</ul>
		</nav>
	);
}
