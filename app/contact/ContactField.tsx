import { type ChangeEvent, type KeyboardEvent, useRef } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactFormValues } from "./types";

interface Props {
	register: UseFormRegister<ContactFormValues>;
}

export function ContactField({ register }: Props) {
	const valueRef = useRef<string>("");
	const ref = useRef<HTMLTextAreaElement | null>(null);
	const { ref: descriptionRef, ...rest } = register("description", {
		required: true,
	});

	const onInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (!ref.current) return;

		// resize textarea if deleting
		if (valueRef.current.length > e.target.value.length) {
			ref.current.style.height = "auto";
		}

		// resize textarea to fit content
		ref.current.style.height = `${ref.current.scrollHeight}px`;

		// store previous value
		valueRef.current = e.target.value;

		setTimeout(() => {
			document.querySelector("main")?.scrollIntoView({
				behavior: "smooth",
				block: "end",
			});
		}, 200);
	};

	return (
		<textarea
			{...rest}
			ref={(e) => {
				descriptionRef(e);
				if (e) {
					ref.current = e;
				}
			}}
			placeholder="What can I build for you?"
			rows={1}
			onInput={onInput}
		/>
	);
}
