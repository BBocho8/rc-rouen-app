import { getFormattedDateFromUnix } from "@/app/utils/getFormattedDate"
import { getFormattedStripePrice } from "@/app/utils/getFormattedPrice"
import { OrdersApiResponse } from "@/sanity/types/Order"
import Link from "next/link"

const orderStatus = [
	"Pending",
	"Processing",
	"Shipped",
	"Delivered",
	"Cancelled",
	"Refunded",
]

type OrdersTableProps = {
	orders: OrdersApiResponse
}
const OrdersTable = ({ orders }: OrdersTableProps) => {
	return (
		<table className="table-auto border-collapse w-full">
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
				{orders.map((order) => {
					return (
						<tr key={order._id} className="text-center">
							<td className="border border-primary max-w-8">
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
			</tbody>
		</table>
	)
}
export default OrdersTable
