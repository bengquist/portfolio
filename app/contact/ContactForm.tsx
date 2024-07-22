import { type SubmitHandler, useForm } from "react-hook-form";

import { SendIcon } from "../icons/Send";
import { ContactField } from "./ContactField";
import type { ContactFormValues } from "./types";

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormValues>({
		defaultValues: {
			name: "",
			email: "",
			description: "",
		},
	});

	const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex gap-4">
				<div className="w-full">
					<input
						type="text"
						placeholder="Name"
						{...register("name", { required: true })}
					/>
					<span className="block min-h-4 my-1 text-xs">
						{errors.name ? "Required" : ""}
					</span>
				</div>
				<div className="w-full">
					<input
						type="email"
						placeholder="Email"
						{...register("email", { required: true })}
					/>
					<span className="block min-h-4 my-1 text-xs">
						{errors.email ? "Required" : ""}
					</span>
				</div>
			</div>

			<div className="w-full">
				<div className="flex gap-3 items-end">
					<ContactField register={register} />
					<button type="submit" className="py-1">
						<SendIcon width={32} height={32} color="yellow" />
					</button>
				</div>

				<span className="block min-h-4 my-1 text-xs">
					{errors.description ? "Required" : ""}
				</span>
			</div>
		</form>
	);
}
