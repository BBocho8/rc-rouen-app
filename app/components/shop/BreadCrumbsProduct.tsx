import * as React from "react"
import Typography from "@mui/material/Typography"
import Breadcrumbs from "@mui/material/Breadcrumbs"

import { FaHome } from "react-icons/fa"
import Link from "next/link"

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
	event.preventDefault()
	console.info("You clicked a breadcrumb.")
}

type BreadCrumbsProps = {
	productName: string
}

export default function BreadCrumbsProduct({ productName }: BreadCrumbsProps) {
	return (
		<div role="presentation" onClick={handleClick} className="py-4 px-8 ">
			<Breadcrumbs aria-label="breadcrumb">
				<Link className="flex  items-center gap-x-2" color="inherit" href="/">
					<FaHome className="text-primary-dark" />
					<span className="hover:font-medium uppercase text-xs font-light text-primary-dark">
						RC Rouen Boutique
					</span>
				</Link>
				<Link className="flex items-center" color="inherit" href="/shop">
					<span className="hover:font-medium uppercase text-xs font-light text-primary-dark">
						Maillots
					</span>
				</Link>
				<Typography
					sx={{ display: "flex", alignItems: "center" }}
					color="text.primary"
				>
					<span className="uppercase text-xs font-semibold text-primary-dark">
						{productName}
					</span>
				</Typography>
			</Breadcrumbs>
		</div>
	)
}
