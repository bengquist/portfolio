interface Props {
	name: string;
}

export function TechnologyPill({ name }: Props) {
	return (
		<span className="px-4 py-1 text-sm bg-gray-800 rounded-full ">{name}</span>
	);
}
