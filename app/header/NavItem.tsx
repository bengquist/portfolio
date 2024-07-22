interface Props {
	text: string;
	id: string;
	isActive: boolean;
}

export function NavItem({ text, id, isActive }: Props) {
	const activeClasses = "font-extrabold text-3xl text-[#ffc300]";

	const onClick = () => {
		const element = document.getElementById(id);

		element?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<li className="w-full h-9 flex items-center">
			<button
				type="button"
				onClick={onClick}
				className={`w-full transition-all text-left  ${isActive ? activeClasses : "text-sm"}`}
			>
				{text}
			</button>
		</li>
	);
}
