"use client"

import { getFormattedDateFromUnix } from "@/app/utils/getFormattedDate"
import { getFormattedStripePrice } from "@/app/utils/getFormattedPrice"
import { Order, OrdersApiResponse } from "@/sanity/types/Order"
import Link from "next/link"
import { useState } from "react"
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import ReactPaginate from "react-paginate"

const orderStatus = [
	"Pending",
	"Processing",
	"Shipped",
	"Delivered",
	"Cancelled",
	"Refunded",
]

function Items({ currentItems }: { currentItems: Order[] }) {
	return (
		<>
			{currentItems.map((order: Order) => {
				return (
					<tr key={order._id} className="text-center">
						<td className="border border-primary max-w-12 truncate">
							{getFormattedDateFromUnix(order.date as number)}
						</td>
						<td className="border border-primary max-w-14 truncate px-2">
							<Link href={`/admin-dashboard/orders/${order._id}`}>
								{order._id}
							</Link>
						</td>
						<td className="border border-primary">
							{getFormattedStripePrice(order.order_total_amount as number)}
						</td>
						<td className="border border-primary bg-red-400 capitalize">
							{order.status}
						</td>
						<td className="border border-primary text-center p-1">
							<Link href={`/admin-dashboard/orders/${order._id}`}>
								<button className="bg-primary text-white p-2 rounded-md">
									View
								</button>
							</Link>
						</td>
					</tr>
				)
			})}
		</>
	)
}

type OrdersTableProps = {
	orders: OrdersApiResponse
}
const OrdersTable = ({ orders }: OrdersTableProps) => {
	const itemsPerPage = 10

	const [itemOffset, setItemOffset] = useState(0)

	const endOffset = itemOffset + itemsPerPage
	const currentItems = orders.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(orders.length / itemsPerPage)

	const handlePageClick = (event: any) => {
		console.log(event)
		const newOffset = (event.selected * itemsPerPage) % orders.length
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		)
		setItemOffset(newOffset)
	}

	return (
		<>
			<table className="table-auto border-collapse w-full  ">
				<thead>
					<tr>
						<th className=" border border-primary">Date</th>
						<th className=" border border-primary ">Order ID</th>
						<th className=" border border-primary">Montant</th>
						<th className=" border border-primary">Statut</th>
						<th className="border border-primary">Action</th>
					</tr>
				</thead>
				<tbody>
					<Items currentItems={currentItems} />
				</tbody>
			</table>
			<ReactPaginate
				breakLabel="..."
				nextLabel={<MdNavigateNext size={25} className="text-primary-dark" />}
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel={
					<MdNavigateBefore size={25} className="text-primary-dark" />
				}
				renderOnZeroPageCount={null}
				containerClassName="flex justify-center items-center gap-x-2 my-4 text-lg"
				pageClassName="px-2 py-1 text-primary-dark hover:bg-primary-dark hover:text-white rounded-md"
				activeClassName="bg-primary-dark text-white px-2 py-1"
			/>
		</>
	)
}
export default OrdersTable
