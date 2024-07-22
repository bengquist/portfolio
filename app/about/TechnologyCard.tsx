import type { ComponentType, SVGProps } from "react";

interface Props {
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
	name: string;
}

export function TechnologyCard({ Icon, name }: Props) {
	return (
		<li className="flex items-center gap-2">
			<Icon width={28} height={28} />
			<p className="hover:cursor-default">{name}</p>
		</li>
	);
}
