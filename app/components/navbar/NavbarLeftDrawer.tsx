import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"

import NestedList from "./NestedList"
import SearchInput from "./SearchInput"
import Etiquettes from "./Etiquettes"
import { menuItem, shopItem } from "./NavbarMenuItems"
import { Team } from "@/sanity/types/Team"
import { Etiquettes as EtiquettesType } from "@/sanity/types/Etiquettes"

type Anchor = "top" | "left" | "bottom" | "right"

type NavbarLeftDrawerProps = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	teams: Team[]
	etiquettes: EtiquettesType[]
}

export default function NavbarLeftDrawer({
	isOpen,
	setIsOpen,
	teams,
	etiquettes,
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
			sx={{
				width: 305,
				height: "100%",
				backgroundColor: "#f2f2f2",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "start",
			}}
			role="presentation"
		>
			<SearchInput />

			<div className="mb-4">
				<Etiquettes setIsOpen={setIsOpen} etiquettes={etiquettes} />
			</div>
			{/* <Divider variant="middle" /> */}

			{/* <List> */}

			{teams.map((team) => {
				return (
					<NestedList
						key={team._id}
						setIsOpen={setIsOpen}
						isOpen={isOpen}
						title={team.title}
						slug={team.slug}
						isLeftDrawer={true}
						list={menuItem}
						borderColor={team.color}
					/>
				)
			})}

			<NestedList
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				title="boutique"
				borderColor="border-b-complementary"
				isLeftDrawer={true}
				list={shopItem}
				isDefaultLink={false}
			/>
		</Box>
	)

	return (
		<div>
			<React.Fragment>
				<Drawer
					anchor="left"
					open={isOpen}
					onClose={toggleDrawer("left", false)}
					className="translate-y-[56px] md:translate-y-[96px]  md:hidden w-[305px] border-t border-t-sidenavBorder bg-sidenavBG z-10 "
				>
					{list("top")}
				</Drawer>
			</React.Fragment>
		</div>
	)
}
