"use client"

import { CircularProgress } from "@mui/material"

interface SubmitBtnProps {
	text: string
	disabled?: boolean
	isSubmitting?: boolean
	submitText?: string
}

const SubmitBtn = ({
	text,
	disabled,
	isSubmitting,
	submitText = "sending...",
}: SubmitBtnProps) => {
	return (
		<button
			className="bg-primary text-white font-medium py-4 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300 ease-in-out"
			disabled={disabled || isSubmitting}
			type="submit"
		>
			{isSubmitting ? (
				<div className="flex justify-center items-center">
					<CircularProgress />
					<span /> {submitText}
				</div>
			) : (
				text || "submit"
			)}
		</button>
	)
}
export default SubmitBtn
