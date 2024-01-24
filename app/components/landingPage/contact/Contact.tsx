"use client"

import { useState } from "react"
import ContactForm from "./ContactForm"
import ContactSection from "./ContactSection"

const Contact = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	return (
		<>
			<ContactForm
				name={name}
				email={email}
				message={message}
				setName={setName}
				setEmail={setEmail}
				setMessage={setMessage}
			/>
			<ContactSection />
		</>
	)
}
export default Contact
