import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"

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
		<Box sx={{ width: 305, backgroundColor: "#f2f2f2" }} role="presentation">
			<p>Hello</p>
			{/* <List> */}
			<NestedList setIsOpen={setIsOpen} isOpen={isOpen} />
			{/* </List> */}
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
					className="translate-y-[56px] md:translate-y-[96px]  md:hidden w-[305px] border-t border-t-sidenavBorder bg-sidenavBG z-10"
				>
					{list("top")}
				</Drawer>
			</React.Fragment>
		</div>
	)
}
