"use client"
import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge"

interface FormInputProps {
	label: string | (IconType & string)
	name: string
	type: string
	isValid?: boolean
	defaultValue?: string
	autoComplete?: string
	size?: string
	placeholder?: string
	required?: boolean
	id: string
	value: string | number | undefined
	innerRef?: React.RefObject<HTMLInputElement>
	onChange?: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => void
	onFocus?: (
		event:
			| React.FocusEvent<HTMLInputElement>
			| React.FocusEvent<HTMLTextAreaElement>
	) => void
	onBlur?: (
		event:
			| React.FocusEvent<HTMLInputElement>
			| React.FocusEvent<HTMLTextAreaElement>
	) => void
}

const FormInput = ({
	label,
	name,
	type,
	defaultValue,
	size,
	value,
	required,
	autoComplete,
	id,
	onChange,
	onFocus,
	onBlur,
	placeholder,
	innerRef,
	isValid,
}: FormInputProps) => {
	return (
		<div className="flex flex-col ">
			<label htmlFor={name} className="py-2 px-1">
				<span className="capitalize text-sm tracking-wide">{label}</span>
			</label>
			<input
				type={type}
				ref={innerRef}
				id={id}
				autoComplete={autoComplete}
				name={name}
				value={value}
				required={required}
				onChange={onChange}
				placeholder={placeholder}
				onBlur={onBlur}
				onFocus={onFocus}
				defaultValue={defaultValue}
				className={twMerge(
					"h-12 border rounded-lg p-4 focus:outline-none focus:border-primary-bright",
					size,
					isValid && "border-success"
				)}
			/>
		</div>
	)
}
export default FormInput
