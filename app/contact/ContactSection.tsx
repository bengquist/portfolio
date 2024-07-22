import type { FormEvent } from "react";

import { SendIcon } from "../icons/Send";
import { Section } from "../ui/Section";
import { ContactField } from "./ContactField";

export function ContactSection() {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<Section id="contact">
			<form className="flex gap-4 items-end" onSubmit={onSubmit}>
				<ContactField />
				<button type="submit" className="p-2 text-[#C1CBDA]">
					<SendIcon width={32} height={32} color="#ffc300" />
				</button>
			</form>
		</Section>
	);
}
