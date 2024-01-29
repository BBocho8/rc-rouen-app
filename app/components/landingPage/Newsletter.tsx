"use client"
import jsonp from "jsonp"
import { useState } from "react"
import { RiArrowRightLine } from "react-icons/ri"
import { toast } from "react-toastify"

const Newsletter = () => {
	//TODO: Regex for email
	const [email, setEmail] = useState<string>("")

	const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const url =
				"https://gmail.us21.list-manage.com/subscribe/post-json?u=8dea8a733c5578eea005bfb23&amp;id=dff9fc0e9e&amp;f_id=00f2f5e6f0"
			jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
				const { msg, result } = data
				// do something with response

				setEmail("")
				toast.success("Inscription à la newsletter complétée avec succès")
			})
		} catch (error) {
			console.log(error)
			toast.error("Erreur lors de l'inscription à la newsletter")
		}
	}

	return (
		<div className="flex flex-col gap-y-8  mx-auto max-w-xl">
			<p className="text-center text-4xl font-light">
				Pour recevoir directement les dernières informations du club dans ta
				boîte mail.
			</p>
			<form
				onSubmit={(e) => handleNewsletter(e)}
				className="flex w-3/4 relative  mx-auto"
			>
				<button type="submit">
					<RiArrowRightLine
						size={25}
						className=" text-black min-w-10 text-center absolute right-0 top-0 z-[1] "
					/>
				</button>
				<input
					type="email"
					name="EMAIL"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email Address"
					className="pl-2 border-b pb-1 border-b-black placeholder:text-black placeholder:font-bold w-full focus:outline-none"
				/>
			</form>
		</div>
	)
}
export default Newsletter
