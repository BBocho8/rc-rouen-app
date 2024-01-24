import * as React from "react"
import Typography from "@mui/material/Typography"
import Breadcrumbs from "@mui/material/Breadcrumbs"

import { FaHome } from "react-icons/fa"
import Link from "next/link"

type BreadCrumbsProps = {
	productName: string
}

export default function BreadCrumbsProduct({ productName }: BreadCrumbsProps) {
	return (
		<Breadcrumbs aria-label="breadcrumb" className="py-4 px-8">
			<Link className="flex  items-center gap-x-2 " color="inherit" href="/">
				<FaHome className="text-primary-dark" />
				<span className="hover:font-medium uppercase text-xs font-light text-primary-dark cursor-pointer">
					RC Rouen Boutique
				</span>
			</Link>
			<Link className="flex items-center " color="inherit" href="/shop">
				<span className="hover:font-medium uppercase text-xs font-light text-primary-dark cursor-pointer">
					Maillots
				</span>
			</Link>

			<span className="flex items-center uppercase text-xs font-semibold text-primary-dark">
				{productName}
			</span>
		</Breadcrumbs>
	)
}
