import { useStateContext } from "@/app/context/StateContext"
import getFormattedPrice from "@/app/utils/getFormattedPrice"
import { Product } from "@/sanity/types/Product"
import Image from "next/image"
import { GoTrash } from "react-icons/go"

type CartItemProps = {
	product: Product
}

const CartItem = ({ product }: CartItemProps) => {
	const { onRemove } = useStateContext()

	return (
		<div className="flex items-center justify-center gap-x-2 p-2 ">
			<Image
				src={product.image[0].url}
				alt="test"
				width={60}
				height={60}
				className="aspect-square p-1 border border-gray-300 rounded-md bg-white"
			/>

			<div className="grow flex flex-col items-start justify-center">
				<p className="text-sm tracking-wide font-medium  line-clamp-1 ">
					{product.name}
				</p>
				<p className="text-xs tracking-wide font-light flex items-center gap-x-1">
					Taille :
					<span className="font-medium">{product.size?.toUpperCase()}</span>
				</p>
				<p className="text-xs tracking-wide font-light flex items-center gap-x-1">
					Quantité :<span className="font-medium">{product.quantity}</span>
				</p>
			</div>

			<div className=" flex flex-col items-end gap-y-1">
				<div onClick={() => onRemove(product)} className="cursor-pointer pr-2">
					<GoTrash size={15} />
				</div>
				<p className="text-sm font-medium tracking-wide">
					{product.is_discounted
						? getFormattedPrice(
								(product.discounted_price as number) * product.quantity! || 0
						  )
						: getFormattedPrice(product.price * product.quantity!)}
				</p>
			</div>
		</div>
	)
}
export default CartItem
