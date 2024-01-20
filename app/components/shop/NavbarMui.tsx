"use client"

import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { GiHamburgerMenu } from "react-icons/gi"

import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { ThemeProvider, createTheme } from "@mui/material"
import Image from "next/image"
import { useStateContext } from "@/app/context/StateContext"
import { IoIosSearch } from "react-icons/io"
import { IoCartOutline, IoCloseCircleOutline } from "react-icons/io5"
import { FaChevronRight } from "react-icons/fa"
import Link from "next/link"
import { Cart } from "."

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window
}

const drawerWidth = 300
export const navItems = [
	"MAILLOTS",
	"ENTRAINEMENTS",
	"HOMME",
	"FEMME",
	"ENFANT",
	"PROMOTIONS",
]

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
		},
	},
	palette: {
		primary: {
			main: "#851440",
		},
		secondary: {
			main: "#ECE5A5",
		},
	},
})

export default function NavbarMui(props: Props) {
	const { showCart, setShowCart, totalQuantities } = useStateContext()
	const { window } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Link href="/shop">
				<div className="flex items-center justify-center gap-x-1 py-4">
					<Image
						src="/logoTest.png"
						width={45}
						height={45}
						alt="logo rcr"
						className="cursor-pointer"
					/>
					<div className="flex flex-col items-start justify-center cursor-pointer">
						<span className="uppercase text-xs font-medium">
							Racing Club de Rouen
						</span>
						<span className="uppercase text-xs font-extralight">
							Boutique officielle
						</span>
					</div>
				</div>
			</Link>
			<Divider />
			<ul className="">
				{navItems.map((item) => (
					<Link key={item} href={`/shop/category/${item.toLowerCase()}`}>
						<li className="pl-4 pr-2 flex justify-between items-center py-3 cursor-pointer border-b border-b-gray-200 hover:bg-gray-100 transition">
							<span className="pl-2 uppercase text-sm font-medium">{item}</span>
							<FaChevronRight size={15} />
						</li>
					</Link>
				))}
			</ul>
		</Box>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<ThemeProvider theme={theme}>
			<Box className="flex relative ">
				{mobileOpen && (
					<span
						className="absolute top-2 left-[19.5rem] z-[1201] transition"
						onClick={() => setMobileOpen(false)}
					>
						<IoCloseCircleOutline
							className="cursor-pointer text-sidenavBG"
							size={30}
						/>
					</span>
				)}
				<CssBaseline />
				<AppBar component="nav" className="max-w-app mx-auto relative">
					<Toolbar className="flex justify-between ">
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className="mr-2 md:hidden"
						>
							<GiHamburgerMenu />
						</IconButton>
						<div className="flex items-center justify-start gap-x-1 sm:grow lg:grow-0">
							<Image
								src="/logoTest.png"
								width={45}
								height={45}
								alt="logo rcr"
							/>
							<div className="flex flex-col items-start justify-center">
								<span className="uppercase text-xs font-medium">
									Racing Club de Rouen
								</span>
								<span className="uppercase text-xs font-extralight">
									Boutique officielle
								</span>
							</div>
						</div>

						<div className="flex justify-center items-center gap-x-2">
							<div className="nav-icon">
								<IoIosSearch size={25} />
							</div>
							<button
								type="button"
								className="nav-icon"
								onClick={() => setShowCart(true)}
							>
								<IoCartOutline size={25} />

								<span className="absolute top-[-6px] right-[-8px]  text-xs text-white bg-[#f02d34] w-[16px] h-[16px] rounded-[50%] text-center font-semibold">
									{totalQuantities}
								</span>
							</button>
							{showCart && <Cart />}
						</div>
					</Toolbar>
				</AppBar>

				<nav>
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", md: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</nav>
			</Box>
		</ThemeProvider>
	)
}
