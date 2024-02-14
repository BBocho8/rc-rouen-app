import OrdersFilter from "@/app/components/admin-dashboard/OrdersFilter"
import OrdersTable from "@/app/components/admin-dashboard/OrdersTable"

import { getOrders } from "@/sanity/utils/admin/getOrders"

const OrdersPage = async () => {
	const orders = await getOrders()

	if (!orders.length) {
		return <div>Orders not found</div>
	}

	return (
		<div className="flex flex-col items-center">
			<h1 className="my-4 text-center text-3xl font-medium">COMMANDES</h1>
			<div className="my-4 flex justify-center items-center">
				<span>Filter by : </span>
				<OrdersFilter />
			</div>
			<OrdersTable orders={orders} />
		</div>
	)
}
export default OrdersPage

export const dynamic = "force-dynamic"
