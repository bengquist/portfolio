import { profiles } from "./data";

export function Profiles() {
	return (
		<ul className="flex gap-6 mb-3">
			{profiles.map(({ Icon, url }) => (
				<li key={url}>
					<a
						href={url}
						target="_blank"
						rel="noreferrer"
						className="transition-colors hover:text-yellow"
					>
						<Icon width={28} height={28} />
					</a>
				</li>
			))}
		</ul>
	);
}
