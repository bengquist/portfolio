import { type ChangeEvent, type KeyboardEvent, useRef, useState } from "react";

export function ContactField() {
	const ref = useRef<HTMLTextAreaElement>(null);
	const [text, setText] = useState("");

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);

		if (!ref.current) return;

		if (ref.current.value.length < text.length) {
			ref.current.style.height = "auto";
		}

		ref.current.style.height = `${ref.current.scrollHeight}px`;
	};

	const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (ref.current && ref.current.value.length < text.length) {
			ref.current.style.height = "auto";
		}
	};

	return (
		<textarea
			ref={ref}
			className={
				"w-full p-3 rounded  resize-none leading-8 text-sm font-medium transition-all overflow-hidden placeholder:text-[#000814] bg-[#C1CBDA] text-[#000814]"
			}
			placeholder="What can I build for you?"
			rows={1}
			value={text}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	);
}
