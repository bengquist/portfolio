import type { FormEvent } from "react";

import { Section } from "../ui/Section";
import ContactForm from "./ContactForm";

export function ContactSection() {
	return (
		<Section id="contact">
			<ContactForm />
		</Section>
	);
}
