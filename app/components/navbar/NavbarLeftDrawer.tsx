import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { CiMail } from "react-icons/ci"
import Link from "next/link"
import NestedList from "./NestedList"

type Anchor = "top" | "left" | "bottom" | "right"

type NavbarLeftDrawerProps = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavbarLeftDrawer({
	isOpen,
	setIsOpen,
}: NavbarLeftDrawerProps) {
	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return
			}

			isOpen ? setIsOpen(false) : !isOpen ? setIsOpen(true) : null
		}

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			// onClick={toggleDrawer(anchor, false)}
			// onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{/* <Link href="/equipes/equipe-premiere/actualite">
					<span className="uppercase font-bold text-xl cursor-pointer hover:text-primary">
						Equipe Premiere
					</span>
				</Link> */}
				<NestedList setIsOpen={setIsOpen} isOpen={isOpen} />
			</List>
			<Divider />
			<List>
				<p>Test</p>
				<p>Test</p>
			</List>
		</Box>
	)

	return (
		<div>
			<React.Fragment>
				<Drawer
					anchor="left"
					open={isOpen}
					onClose={toggleDrawer("left", false)}
					className="translate-y-[56px] md:translate-y-[96px] z-[1] md:hidden"
				>
					{list("top")}
				</Drawer>
			</React.Fragment>
		</div>
	)
}
