import { SendIcon } from "../icons/Send";
import { ContactField } from "./ContactField";

export default function ContactForm() {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form className="flex flex-col gap-4" onSubmit={onSubmit}>
			<div className="flex gap-4">
				<input
					type="text"
					placeholder="Name"
					className="w-full p-3 rounded  resize-none leading-8 text-sm font-medium transition-all overflow-hidden placeholder:text-[#05101ba5] bg-[#C1CBDA] text-[#05101b]"
				/>
				<input
					type="text"
					placeholder="Email"
					className="w-full p-3 rounded  resize-none leading-8 text-sm font-medium transition-all overflow-hidden placeholder:text-[#05101ba5] bg-[#C1CBDA] text-[#05101b]"
				/>
			</div>

			<div className="flex gap-4 items-end">
				<ContactField />
				<button type="submit" className="p-2 text-[#C1CBDA]">
					<SendIcon width={32} height={32} color="#ffc300" />
				</button>
			</div>
		</form>
	);
}
