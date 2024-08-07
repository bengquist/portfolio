export function ResumeIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill={props.color || "currentColor"}
			viewBox="0 0 16 16"
			height="1em"
			width="1em"
			{...props}
		>
			<title>Resume</title>
			<path d="M9.293 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4.707A1 1 0 0013.707 4L10 .293A1 1 0 009.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 01-1-1zM4.5 9a.5.5 0 010-1h7a.5.5 0 010 1h-7zM4 10.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 010-1h4a.5.5 0 010 1h-4z" />
		</svg>
	);
}
