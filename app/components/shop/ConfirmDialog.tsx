import { useStateContext } from "@/app/context/StateContext"
import Dialog from "@mui/material/Dialog"

import { Fragment, useState } from "react"
import { MdDelete } from "react-icons/md"

export default function ConfirmDialog() {
	const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const emptyCart = () => {
		setOpen(false)
		setCartItems([])
		setTotalPrice(0)
		setTotalQuantities(0)
	}

	return (
		<Fragment>
			<button
				onClick={handleClickOpen}
				title="Vider le panier"
				className="text-black sm:text-primary-dark"
			>
				<MdDelete size={25} />
			</button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<div className="px-4 pt-4 pb-2 text-center">
					<h3 className="font-medium uppercase text-sm">Vider le panier?</h3>
					<p className="text-xs">Cette action est irréversible.</p>
				</div>
				<div className="flex gap-x-8 justify-between items-center px-12 pb-2">
					<button
						onClick={handleClose}
						className="cursor-pointer hover:bg-primary-bright hover:text-white px-4 py-1 grow rounded-lg transition"
					>
						NON
					</button>
					<span className="border-l h-4 border-l-gray-800" />
					<button
						onClick={emptyCart}
						className="cursor-pointer hover:bg-primary-bright hover:text-white px-4 py-1 grow rounded-lg transition"
					>
						OUI
					</button>
				</div>
			</Dialog>
		</Fragment>
	)
}
