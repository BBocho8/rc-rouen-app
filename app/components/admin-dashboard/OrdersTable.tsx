import Link from "next/link"

const orderStatus = [
	"Pending",
	"Processing",
	"Shipped",
	"Delivered",
	"Cancelled",
	"Refunded",
]

const OrdersTable = () => {
	return (
		<table className="table-auto border-collapse w-full">
			<thead>
				<tr>
					<th className=" border border-primary ">Order ID</th>
					<th className=" border border-primary">Date</th>
					<th className=" border border-primary">Montant</th>
					<th className=" border border-primary">Statut</th>
					<th className="border border-primary">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr className="text-center">
					<td className="border border-primary ">1</td>
					<td className="border border-primary">2021-10-01</td>
					<td className="border border-primary">100.00</td>
					<td className="border border-primary bg-red-400">Pending</td>
					<td className="border border-primary text-center p-1">
						<Link href="/admin-dashboard/orders/1234">
							<button className="bg-primary text-white p-2 rounded-md">
								View
							</button>
						</Link>
					</td>
				</tr>
				<tr className="text-center">
					<td className="border border-primary ">2</td>
					<td className="border border-primary">2021-10-01</td>
					<td className="border border-primary">100.00</td>
					<td className="border border-primary bg-orange-400">Processing</td>
					<td className="border border-primary text-center p-1">
						<Link href="/admin-dashboard/orders/1234">
							<button className="bg-primary text-white p-2 rounded-md">
								View
							</button>
						</Link>
					</td>
				</tr>
				<tr className="text-center">
					<td className="border border-primary ">3</td>
					<td className="border border-primary">2021-10-01</td>
					<td className="border border-primary">190.00</td>
					<td className="border border-primary bg-yellow-400">Shipped</td>
					<td className="border border-primary text-center p-1">
						<Link href="/admin-dashboard/orders/1234">
							<button className="bg-primary text-white p-2 rounded-md">
								View
							</button>
						</Link>
					</td>
				</tr>
				<tr className="text-center">
					<td className="border border-primary ">4</td>
					<td className="border border-primary">2021-10-01</td>
					<td className="border border-primary">1730.00</td>
					<td className="border border-primary bg-green-400">Delivered</td>
					<td className="border border-primary text-center p-1">
						<Link href="/admin-dashboard/orders/1234">
							<button className="bg-primary text-white p-2 rounded-md">
								View
							</button>
						</Link>
					</td>
				</tr>
				<tr className="text-center">
					<td className="border border-primary ">5</td>
					<td className="border border-primary">2021-10-01</td>
					<td className="border border-primary">230.00</td>
					<td className="border border-primary bg-green-400">Delivered</td>
					<td className="border border-primary text-center p-1">
						<Link href="/admin-dashboard/orders/1234">
							<button className="bg-primary text-white p-2 rounded-md">
								View
							</button>
						</Link>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
export default OrdersTable
