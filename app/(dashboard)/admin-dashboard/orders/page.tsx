import OrdersFilter from "@/app/components/admin-dashboard/OrdersFilter"
import OrdersPagination from "@/app/components/admin-dashboard/OrdersPagination"
import OrdersTable from "@/app/components/admin-dashboard/OrdersTable"
import { orderResponse } from "@/app/types/orderResponse"
import { getFormattedDateFromUnix } from "@/app/utils/getFormattedDate"
import { getOrder, getOrders } from "@/sanity/utils/admin/getOrders"
import moment from "moment"

const OrdersPage = async () => {
	const orderID =
		"cs_test_b1BuRTznp7qb4khum0pFq1fFuTvhrthX1TYOuThITuV11amg4YI7H24wya"
	const orderID2 =
		"cs_test_a1rjsup0prFgFkUnurLWqPLURsIsSXwTOwWL2OJsZDMoYpUtJMw5MAg5Kq"
	// const handleTest = async (orderID: string) => {
	// 	const response = await fetch(
	// 		`${process.env.NEXT_PUBLIC_BASE_URL}/api/session`,
	// 		{
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify({
	// 				id: orderID,
	// 			}),
	// 			cache: "no-store",
	// 		}
	// 	)
	// 	if (response.status === 500) return

	// 	const data = await response.json()
	// 	return data
	// }

	// const data: orderResponse = await handleTest(orderID)
	// console.log("ORDEEEEEER 1", data)
	// const data2: orderResponse = await handleTest(orderID2)
	// console.log("ORDEEEEEER 2", data2)

	// console.log(getFormattedDateFromUnix(1706993437))

	return (
		<div className="flex flex-col items-center">
			<h1 className="my-4 text-center text-3xl font-medium">COMMANDES</h1>
			<div className="my-4 flex justify-center items-center">
				<span>Filter by : </span>
				<OrdersFilter />
			</div>
			<OrdersTable />

			<div className="my-4">
				<OrdersPagination />
			</div>
		</div>
	)
}
export default OrdersPage
