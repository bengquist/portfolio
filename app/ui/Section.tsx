import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
	id: string;
	className?: string;
}

export function Section({ children, id, className }: Props) {
	return (
		<section
			id={id}
			className={`flex flex-col gap-28 py-8 lg:py-14 ${className}`}
		>
			{children}
		</section>
	);
}
