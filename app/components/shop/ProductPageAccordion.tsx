import { Divider } from "@mui/material"
import { useState } from "react"
import { FiMinus, FiPlus } from "react-icons/fi"

type ProductPageAccordionProps = {
	children: React.ReactNode
	title: string
}

const ProductPageAccordion = ({
	children,
	title,
}: ProductPageAccordionProps) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className="w-full px-2 ">
			<Divider sx={{ marginY: "16px" }} />
			<div className="flex justify-between items-center px-2">
				<p className="font-medium  tracking-wide">{title}</p>
				{isOpen ? (
					<div className="cursor-pointer" onClick={() => setIsOpen(false)}>
						<FiMinus size={20} />
					</div>
				) : (
					<div className="cursor-pointer" onClick={() => setIsOpen(true)}>
						<FiPlus size={20} />
					</div>
				)}
			</div>
			{isOpen && <div className="pl-4 pr-4 my-2">{children}</div>}
		</div>
	)
}
export default ProductPageAccordion
