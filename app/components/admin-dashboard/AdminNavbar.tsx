"use client"
import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import { RxAvatar } from "react-icons/rx"
import { UserButton } from "@clerk/nextjs"

const pages = [
	// {
	// 	name: "Blog Posts",
	// 	link: "/blog",
	// },
	// {
	// 	name: "Produits",
	// 	link: "/products",
	// },
	{
		name: "Commandes",
		link: "/orders",
	},
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

const settings = ["Profile", "Account", "Dashboard", "Logout"]

function AdminNavbar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<ThemeProvider theme={theme}>
			<AppBar position="static">
				<Container>
					<Toolbar disableGutters className="justify-between">
						<Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
							<Link href="/admin-dashboard">
								<span className="font-bold tracking-[0.3rem] ">ADMIN</span>
							</Link>
						</Box>

						<Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<GiHamburgerMenu />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<Link href={`/admin-dashboard${page.link}`} key={page.name}>
										<MenuItem onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{page.name}</Typography>
										</MenuItem>
									</Link>
								))}
							</Menu>
						</Box>

						<Link href="/admin-dashboard">
							<span className="font-bold tracking-[0.3rem] flex  md:hidden ">
								ADMIN
							</span>
						</Link>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								justifyContent: "center",
							}}
						>
							{pages.map((page) => (
								<Link href={`/admin-dashboard${page.link}`} key={page.name}>
									<Button
										onClick={handleCloseNavMenu}
										sx={{ my: 2, color: "white", display: "block" }}
									>
										{page.name}
									</Button>
								</Link>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<IconButton sx={{ p: 0 }}>
								<UserButton afterSignOutUrl="/" />
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	)
}
export default AdminNavbar
