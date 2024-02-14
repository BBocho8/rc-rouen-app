import SingleOrder from "@/app/components/admin-dashboard/SingleOrder"
import { getProducts } from "@/sanity/sanity-utils"
import { getOrder, getOrders } from "@/sanity/utils/admin/getOrders"

export async function generateStaticParams() {
	const orders = await getOrders()

	return orders.map((order) => ({
		orderID: order._id,
	}))
}

const OrderPage = async ({ params }: { params: { orderID: string } }) => {
	const order = await getOrder(params.orderID)
	const products = await getProducts()

	if (!order) {
		return <div>Order not found</div>
	}

	return <SingleOrder order={order} products={products} />
}
export default OrderPage
