export function CypressIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			stroke={props.color || "currentColor"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			viewBox="0 0 24 24"
			height="1em"
			width="1em"
			{...props}
		>
			<title>Cypress</title>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M19.48 17.007A9 9 0 1012 21a2.08 2.08 0 001.974-1.423L17.5 9M13.5 9l2 6M10.764 9.411a3 3 0 10-.023 5.19" />
		</svg>
	);
}
