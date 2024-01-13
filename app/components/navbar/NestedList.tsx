import * as React from "react"
import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import { MdExpandLess, MdExpandMore } from "react-icons/md"
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
}

export default function NestedList({
	isOpen,
	setIsOpen,
	title = "",
	borderColor = "border-b-primary",
}: NestedListProps) {
	const [isNestedListOpen, setIsNestedListOpen] = React.useState(true)

	const handleClick = () => {
		setIsNestedListOpen(!isNestedListOpen)
	}

	const formattedTitle = title.replace("-", " ")
	const formattedLinkCategory = removeAccent(title)

	return (
		<List
			sx={{ width: "100%", maxWidth: 305 }}
			// className="py-0"
			component="nav"
			aria-labelledby="nested-list-subheader"
		>
			<ListItemButton
				className="hover:bg-transparent"
				onClick={handleClick}
				// sx={{
				// 	display: "flex",
				// 	flexDirection: "row",
				// 	justifyContent: "space-between",
				// }}
			>
				<div className="flex justify-between border-b w-[16.8rem] border-b-gray-300 pb-1 relative ">
					<Link href={`/equipes/${formattedLinkCategory}/actualite`}>
						<span className="uppercase font-medium  text-xl cursor-pointer hover:text-primary">
							{formattedTitle}
						</span>
					</Link>
					<div className="flex items-center">
						{isNestedListOpen ? (
							<RxCross2
								className={twMerge(
									styles["rotate-center-reverse"],
									"text-gray-400"
								)}
							/>
						) : (
							<FiPlus
								className={twMerge(styles["rotate-center"], "text-gray-400")}
							/>
						)}
					</div>
					<div
						className={twMerge(
							"w-1/5   border-b-4  absolute bottom-[-2px] rounded-sm",
							borderColor
						)}
					/>
				</div>
			</ListItemButton>
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
		</List>
	)
}
