import { NavItem } from "./NavItem";
import { navLinks } from "./data";

interface Props {
	activeSection: string;
}

export function Navigation({ activeSection }: Props) {
	return (
		<nav>
			<ul className="flex flex-col">
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
