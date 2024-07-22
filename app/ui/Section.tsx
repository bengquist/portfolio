import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
	id: string;
}

export function Section({ children, id }: Props) {
	return (
		<section id={id} className="flex flex-col gap-28 py-14">
			{children}
		</section>
	);
}
