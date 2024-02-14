import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"

import NestedList from "./NestedList"
import { menuItem, shopItem } from "./NavbarMenuItems"
import { Team } from "@/sanity/types/Team"

type Anchor = "top" | "left" | "bottom" | "right"

type NavbarTopDrawerProps = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	teams: Team[]
}

export default function NavbarTopDrawer({
	isOpen,
	setIsOpen,
	teams,
}: NavbarTopDrawerProps) {
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
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
			}}
			role="presentation"
			// onClick={toggleDrawer(anchor, false)}
			// onKeyDown={toggleDrawer(anchor, false)}
		>
			<List
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "start",
					alignItems: "start",
					paddingX: "32px",
				}}
			>
				{teams.map((team) => {
					return (
						<NestedList
							key={team._id}
							setIsOpen={setIsOpen}
							isOpen={isOpen}
							title={team.title}
							slug={team.slug}
							borderColor={team.color}
							isLeftDrawer={false}
							list={menuItem}
						/>
					)
				})}

				<NestedList
					setIsOpen={setIsOpen}
					isOpen={isOpen}
					title="boutique"
					borderColor="border-b-complementary"
					isLeftDrawer={false}
					list={shopItem}
					isDefaultLink={false}
				/>
			</List>
		</Box>
	)

	return (
		<div>
			<React.Fragment>
				<Drawer
					anchor="top"
					open={isOpen}
					onClose={toggleDrawer("top", false)}
					className="translate-y-[56px] md:translate-y-[96px] z-[1] hidden md:block app:max-w-app app:mx-auto"
				>
					{list("top")}
				</Drawer>
			</React.Fragment>
		</div>
	)
}
