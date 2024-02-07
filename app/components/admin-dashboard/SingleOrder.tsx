import { GoTrash } from "react-icons/go"
import OrdersFilter from "./OrdersFilter"
import Image from "next/image"
import { ProductApiResponse } from "@/sanity/types/Product"
import { Order, OrdersApiResponse } from "@/sanity/types/Order"
import { getFormattedStripePrice } from "@/app/utils/getFormattedPrice"
type SingleOrderProps = {
	products: ProductApiResponse
	order: Order
}
const SingleOrder = ({ products, order }: SingleOrderProps) => {
	const orderWithFoundProduct = order.order_items?.map((item) => {
		const foundProduct = products.find(
			(product) => product._id === item.product_ID
		)
		return { foundProduct, item }
	})

	return (
		<div className="my-8">
			<div className="flex justify-center w-96 mx-auto bg-red-200 my-4 py-6 px-8 rounded-sm">
				{order.client_address && (
					<p className="flex flex-col items-center ">
						<span className="font-semibold text-xl uppercase ">Client</span>
						<span>{order.client_name}</span>
						<span>{order.client_address?.[0]?.line1}</span>
						{order.client_address?.[0]?.line2 && (
							<span>{order.client_address?.[0]?.line2}</span>
						)}{" "}
						<span className="font-medium">
							{order.client_address?.[0]?.postal_code}{" "}
							{order.client_address?.[0]?.city},{" "}
							{order.client_address?.[0]?.country}
						</span>
					</p>
				)}
			</div>
			<p className=" text-lg  justify-center items-center gap-x-2 flex flex-col">
				Order ID:{" "}
				<span className="text-2xl font-light px-8 truncate max-w-96">
					{" "}
					{order._id}
				</span>
			</p>
			<div className="flex flex-col justify-center items-center my-2">
				<div className="flex justify-center items-center">
					Status :
					<OrdersFilter dbstatus={order.status as string} />
				</div>
			</div>

			<table className="table-auto w-full border-collapse my-6 ">
				<thead>
					<tr className="border-b border-b-gray-300">
						<th className="table-header">Produit</th>
						<th className="table-header">Quantité</th>
						<th className="table-header">Taille</th>
						<th className="table-header  ">Unitaire</th>
						<th className="table-header  ">Total</th>
					</tr>
				</thead>
				<tbody className="[&>*:nth-child(odd)]:bg-gray-200 [&>*:nth-child(even)]:bg-gray-100 ">
					{orderWithFoundProduct?.map((product, index) => {
						return (
							<tr
								key={`${product.foundProduct?._id} ${order.order_items?.[index]?.size}`}
							>
								<td className="">
									<div className="flex justify-start items-center gap-x-4 py-4 px-8">
										<Image
											src={product.foundProduct?.image[0].url as string}
											alt={product.foundProduct?.image[0].alt as string}
											height={75}
											width={75}
											className="aspect-square"
										/>
										<p className="text-lg font-light tracking-wide  ">
											{product.foundProduct?.name}
										</p>
									</div>
								</td>
								<td className="table-data">
									{order.order_items?.[index]?.quantity}
								</td>
								<td className="table-data">
									{order.order_items?.[index]?.size}
								</td>
								<td className="table-data  ">
									{getFormattedStripePrice(
										order.order_items?.[index]?.amount_subtotal as number
									)}
								</td>
								<td className="table-data text-lg ">
									{getFormattedStripePrice(
										order.order_items?.[index]?.amount_total as number
									)}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<div className="flex justify-end items-start ">
				<div className="flex flex-col justify-center items-start pt-2 px-16 w-[350px] ">
					<p className="flex justify-between w-full font-light">
						Total:{" "}
						<span>
							{getFormattedStripePrice(order.order_subtotal_amount as number)}
						</span>
					</p>
					<p className="flex justify-between w-full font-light">
						Livraison:{" "}
						<span>
							{getFormattedStripePrice(order.shipping_rate as number)}
						</span>
					</p>
					<p className="flex justify-between w-full font-medium text-lg mt-2">
						Montant Total:{" "}
						<span>
							{getFormattedStripePrice(order.order_total_amount as number)}
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}
export default SingleOrder
