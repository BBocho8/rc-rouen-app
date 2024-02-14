"use client"
import * as React from "react"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

const orderStatus = [
	"all",
	"pending",
	"processing",
	"shipped",
	"delivered",
	"cancelled",
	"refunded",
]

type SelectLabelsProps = {
	dbstatus?: string
}
export default function SelectLabels({ dbstatus }: SelectLabelsProps) {
	const [status, setStatus] = React.useState(dbstatus || "all")

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
								<span className="capitalize">{status}</span>
							</MenuItem>
						)
					})}
				</Select>
			</FormControl>
		</div>
	)
}
