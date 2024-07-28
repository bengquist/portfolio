import { Navigation } from "./Navigation";
import { Profiles } from "./Profiles";

interface Props {
	activeSection: string;
}

export function Header({ activeSection }: Props) {
	return (
		<header className="h-screen w-full max-w-sm flex flex-col justify-between gap-12 py-28 sticky top-0">
			<div className="flex flex-col gap-16">
				<div className="flex flex-col gap-4">
					<h1>Blake Engquist</h1>
					<h2>Senior UI Engineer</h2>

					<p className="opacity-75">
						I build performant, scalable, and delightful user interfaces for the
						world to enjoy.
					</p>
				</div>

				<Navigation activeSection={activeSection} />
			</div>

			<Profiles />
		</header>
	);
}
