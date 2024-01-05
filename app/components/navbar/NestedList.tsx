import * as React from "react"
import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import { MdExpandLess, MdExpandMore } from "react-icons/md"
import Link from "next/link"

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
}

export default function NestedList({ isOpen, setIsOpen }: NestedListProps) {
	const [isNestedListOpen, setIsNestedListOpen] = React.useState(true)

	const handleClick = () => {
		setIsNestedListOpen(!isNestedListOpen)
	}

	return (
		<List
			sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
			component="nav"
			aria-labelledby="nested-list-subheader"
			// subheader={
			// 	<ListSubheader component="div" id="nested-list-subheader">
			// 		Nested List Items
			// 	</ListSubheader>
			// }
		>
			<ListItemButton
				onClick={handleClick}
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Link href="/equipes/equipe-premiere/actualite">
					<span className="uppercase font-bold text-xl cursor-pointer hover:text-primary">
						Equipe Premiere
					</span>
				</Link>
				{isNestedListOpen ? <MdExpandLess /> : <MdExpandMore />}
			</ListItemButton>
			<Collapse in={isNestedListOpen} timeout="auto" unmountOnExit>
				<ul className="flex flex-col justify-center items-start px-8 gap-y-1">
					{menuItem.map((item) => {
						return (
							<li
								onClick={() => setIsOpen(false)}
								key={item.id}
								className="font-medium text-sm uppercase tracking-tight hover:text-pretty hover:border-b-2 hover:border-b-primary"
							>
								<Link href={`/equipes/equipe-premiere/${item.id}`}>
									<span>{item.name}</span>
								</Link>
							</li>
						)
					})}
				</ul>
				{/* <List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemText primary="Starred" />
					</ListItemButton>
				</List> */}
			</Collapse>
		</List>
	)
}
