interface Props {
	name: string;
}

export function TechnologyPill({ name }: Props) {
	return (
		<span className="px-2 py-1 text-xs bg-gray-800 rounded-full ">{name}</span>
	);
}
