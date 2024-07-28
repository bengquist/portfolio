interface Props {
	text: string;
	id: string;
	isActive: boolean;
}

export function NavItem({ text, id, isActive }: Props) {
	const onClick = () => {
		const element = document.getElementById(id);

		element?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<li className="w-full flex items-center">
			<button
				type="button"
				onClick={onClick}
				className={`text-lg text-left font-bold link-underline link-underline-yellow ${isActive && "text-yellow link-underline-active"}`}
			>
				{text}
			</button>
		</li>
	);
}
