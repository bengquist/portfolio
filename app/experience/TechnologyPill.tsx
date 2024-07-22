interface Props {
	name: string;
}

export function TechnologyPill({ name }: Props) {
	return (
		<span className="bg-gray-800 rounded-full px-4 py-1 text-sm">{name}</span>
	);
}
