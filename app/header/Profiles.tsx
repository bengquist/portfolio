import { profiles } from "./data";

export function Profiles() {
	return (
		<ul className="flex gap-6 mb-3">
			{profiles.map(({ Icon, url }) => (
				<li key={url}>
					<a href={url} target="_blank" rel="noreferrer">
						<Icon width={24} height={24} />
					</a>
				</li>
			))}
		</ul>
	);
}
