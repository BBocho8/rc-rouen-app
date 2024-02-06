"use client"
import * as React from "react"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

const orderStatus = [
	"All",
	"Pending",
	"Processing",
	"Shipped",
	"Delivered",
	"Cancelled",
	"Refunded",
]

export default function SelectLabels() {
	const [status, setStatus] = React.useState("All")

	const handleChange = (event: SelectChangeEvent) => {
		setStatus(event.target.value)
	}

	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 200 }}>
				<Select
					size="small"
					value={status}
					onChange={handleChange}
					displayEmpty
					inputProps={{ "aria-label": "Without label" }}
				>
					{orderStatus.map((status) => {
						return (
							<MenuItem key={status} value={status}>
								{status}
							</MenuItem>
						)
					})}
				</Select>
			</FormControl>
		</div>
	)
}
