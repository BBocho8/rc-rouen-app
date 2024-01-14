import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import { useState } from "react"

import Collapse from "@mui/material/Collapse"
import Link from "next/link"
import { RxCross2 } from "react-icons/rx"
import { FiPlus } from "react-icons/fi"
import styles from "./NestedList.module.css"
import { twMerge } from "tailwind-merge"
import removeAccent from "@/app/utils/removeAccents"

const menuItem = [
	{
		name: "Actualité",
		id: "actualite",
	},
	{
		name: "Effectif",
		id: "effectif",
	},
	{
		name: "Calendrier et resultats",
		id: "calendrier-et-resultat",
	},
	{
		name: "Classement",
		id: "classement",
	},
]

type NestedListProps = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	title: string
	borderColor?: string
	isLeftDrawer?: boolean
}

export default function NestedList({
	isOpen,
	setIsOpen,
	title = "",
	borderColor = "border-b-primary",
	isLeftDrawer = false,
}: NestedListProps) {
	const [isNestedListOpen, setIsNestedListOpen] = useState(false)

	const handleClick = () => {
		if (isLeftDrawer) {
			setIsNestedListOpen(!isNestedListOpen)
		} else return null
	}

	const formattedTitle = title.replace("-", " ")
	const formattedLinkCategory = removeAccent(title)

	return (
		<List
			sx={{ width: "100%", maxWidth: 305 }}
			component="nav"
			aria-labelledby="nested-list-subheader"
		>
			<ListItemButton
				className="hover:bg-transparent "
				disableRipple
				onClick={handleClick}
			>
				<div className="flex justify-between border-b w-[16.8rem] border-b-gray-300 pb-1 relative ">
					<span className="uppercase font-medium  text-xl  ">
						{formattedTitle}
					</span>

					<div className="flex items-center">
						{isNestedListOpen && isLeftDrawer ? (
							<RxCross2
								className={twMerge(
									styles["rotate-center-reverse"],
									"text-gray-400"
								)}
							/>
						) : !isNestedListOpen && isLeftDrawer ? (
							<FiPlus
								className={twMerge(styles["rotate-center"], "text-gray-400")}
							/>
						) : null}
					</div>
					<div
						className={twMerge(
							"w-1/5   border-b-4  absolute bottom-[-2px] rounded-sm",
							borderColor
						)}
					/>
				</div>
			</ListItemButton>
			{isLeftDrawer ? (
				<Collapse in={isNestedListOpen} timeout="auto" unmountOnExit>
					<ul className="flex flex-col justify-center items-start py-4 px-8 gap-y-1">
						{menuItem.map((item) => {
							return (
								<li
									onClick={() => setIsOpen(false)}
									key={item.id}
									className=" text-sm uppercase tracking-wide hover:text-pretty hover:border-b-2 hover:border-b-primary"
								>
									<Link href={`/equipes/${formattedLinkCategory}/${item.id}`}>
										<span className="normal-case">{item.name}</span>
									</Link>
								</li>
							)
						})}
					</ul>
				</Collapse>
			) : (
				<Collapse in={true} timeout="auto" unmountOnExit>
					<ul className="flex flex-col justify-center items-start py-4 px-8 gap-y-1 ">
						{menuItem.map((item) => {
							return (
								<li
									onClick={() => setIsOpen(false)}
									key={item.id}
									className=" text-sm uppercase tracking-wide hover:text-pretty hover:border-b-2 hover:border-b-primary"
								>
									<Link href={`/equipes/${formattedLinkCategory}/${item.id}`}>
										<span className="normal-case">{item.name}</span>
									</Link>
								</li>
							)
						})}
					</ul>
				</Collapse>
			)}
		</List>
	)
}
