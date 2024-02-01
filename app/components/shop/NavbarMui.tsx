"use client"

import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"

import { GiHamburgerMenu } from "react-icons/gi"

import Toolbar from "@mui/material/Toolbar"

import { NoSsr, ThemeProvider, createTheme } from "@mui/material"
import Image from "next/image"
import { useStateContext } from "@/app/context/StateContext"
import { IoIosSearch } from "react-icons/io"
import { IoCartOutline, IoCloseCircleOutline } from "react-icons/io5"
import { FaChevronRight } from "react-icons/fa"
import Link from "next/link"
import MobileCart from "./MobileCart"
import DesktopCart from "./DesktopCart"
import { GlobalConfigImagesApiResponse } from "@/sanity/types/GlobalConfigImages"

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window
}

const drawerWidth = 300
export const navItems = ["MAILLOTS", "HOMME", "FEMME", "ENFANT", "PROMOTIONS"]

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

type NavbarMuiProps = {
	window?: () => Window
	image: GlobalConfigImagesApiResponse
}
export default function NavbarMui({ window, image }: NavbarMuiProps) {
	const { showCart, setShowCart, totalQuantities } = useStateContext()

	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Link href="/shop">
				<div className="flex items-center justify-center gap-x-1 py-4 cursor-pointer">
					<Image
						src={image[0].image_url}
						alt={image[0].image_alt}
						width={45}
						height={45}
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
				<Link href="/">
					<li className="pl-4 pr-2 flex justify-between items-center py-3 cursor-pointer border-b border-b-gray-200 hover:bg-gray-100 transition">
						<span className="pl-2 uppercase text-sm font-medium">RC ROUEN</span>
						<FaChevronRight size={15} />
					</li>
				</Link>
			</ul>
		</Box>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<ThemeProvider theme={theme}>
			<Box className="max-w-app  ">
				{mobileOpen && (
					<span
						className="absolute top-2 left-[19.5rem] z-[12] transition translate-y-14 sm:translate-y-16"
						onClick={() => setMobileOpen(false)}
					>
						<IoCloseCircleOutline
							className="cursor-pointer text-black"
							size={30}
						/>
					</span>
				)}
				<AppBar component="nav" position="relative">
					<Toolbar className="flex justify-between  ">
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className="mr-2 md:hidden"
							sx={{ display: { xs: "block", md: "none" } }}
						>
							<GiHamburgerMenu />
						</IconButton>
						<Link href="/shop">
							<div className="flex items-center justify-start lg:justify-center  gap-x-1 sm:grow cursor-pointer ">
								<Image
									src={image[0].image_url}
									alt={image[0].image_alt}
									width={45}
									height={45}
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
						</Link>
						<div className="flex justify-center items-center gap-x-2">
							<div className="nav-icon">
								<IoIosSearch size={25} />
							</div>
							<button
								type="button"
								className="nav-icon"
								onClick={() => setShowCart(!showCart)}
							>
								<IoCartOutline size={25} />

								<NoSsr>
									<span className="absolute top-[-6px] right-[-8px]  text-xs text-white bg-[#f02d34] w-[16px] h-[16px] rounded-[50%] text-center font-semibold">
										{totalQuantities}
									</span>
								</NoSsr>
							</button>
							{showCart && <MobileCart />}
							{showCart && <DesktopCart />}
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
						className="translate-y-14 sm:translate-y-16"
					>
						{drawer}
					</Drawer>
				</nav>
			</Box>
		</ThemeProvider>
	)
}
