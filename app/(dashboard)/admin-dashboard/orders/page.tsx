import OrdersFilter from "@/app/components/admin-dashboard/OrdersFilter"
import OrdersPagination from "@/app/components/admin-dashboard/OrdersPagination"
import OrdersTable from "@/app/components/admin-dashboard/OrdersTable"

const OrdersPage = () => {
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
