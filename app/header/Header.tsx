import { Navigation } from "./Navigation";
import { Profiles } from "./Profiles";

interface Props {
	activeSection: string;
}

export function Header({ activeSection }: Props) {
	return (
		<header className="h-screen w-full flex flex-col justify-between gap-12 py-28 sticky top-0 ">
			<div className="flex flex-col gap-16">
				<div className="flex flex-col gap-4">
					<h1>Blake Engquist</h1>
					<h2>Senior UI Engineer</h2>

					<p>
						lorm ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore
					</p>
				</div>

				<Navigation activeSection={activeSection} />
			</div>

			<Profiles />
		</header>
	);
}
