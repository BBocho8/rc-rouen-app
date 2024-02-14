"use client"

import { toast } from "react-toastify"
import FormInput from "./ContactFormInput"
import SubmitBtn from "./ContactFormSubmitBtn"
import { useState } from "react"

type ContactFormProps = {
	name: string
	email: string
	message: string
	setName: React.Dispatch<React.SetStateAction<string>>
	setEmail: React.Dispatch<React.SetStateAction<string>>
	setMessage: React.Dispatch<React.SetStateAction<string>>
}
const ContactForm = ({
	name,
	email,
	message,
	setName,
	setEmail,
	setMessage,
}: ContactFormProps) => {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			setIsSubmitting(true)
			const newUserMessage = { name, email, message }
			await fetch("/api/contact", {
				method: "post",
				body: JSON.stringify(newUserMessage),
			})

			setIsSubmitting(false)
			setName("")
			setEmail("")
			setMessage("")
			toast.success("Message sent successfully")
		} catch (err) {
			console.log(err)
			toast.error("Message not sent, please try again later")
		}
	}

	return (
		<section className="flex flex-col items-center justify-center py-8 sm:py-16  ">
			<h2 className="w-full max-w-md px-4 mb-4 text-xl font-bold text-center uppercase sm:mb-8 sm:text-2xl sm:px-0">
				Ask us anything <span className="text-primary">and we&apos;ll get</span>{" "}
				back soon in a day
			</h2>
			<form
				className="flex flex-col w-full max-w-xs sm:max-w-lg gap-y-4"
				onSubmit={handleFormSubmit}
				id="contact"
			>
				<div className="flex items-center justify-center gap-x-2">
					<div className="w-1/2">
						<FormInput
							label="name:"
							name="name"
							type="text"
							id="name"
							autoComplete="off"
							onChange={(e) => setName(e.target.value)}
							value={name}
							required
						/>
					</div>
					<div className="w-1/2">
						<FormInput
							label="email:"
							name="email"
							type="email"
							id="email"
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center ">
					<label htmlFor="message" className="py-2 px-1">
						<span className="capitalize text-sm tracking-wide ">Message:</span>
					</label>
					<textarea
						name="message"
						id="message"
						value={message}
						rows={5}
						onChange={(e) => setMessage(e.target.value)}
						className=" border rounded-lg p-4 focus:outline-none focus:border-primary-bright"
						required
					></textarea>
				</div>
				<SubmitBtn text="SEND MESSAGE" isSubmitting={isSubmitting} />
			</form>
		</section>
	)
}
export default ContactForm
