"use client"
import { Product, Size } from "@/sanity/types/Product"
import {
	FunctionComponent,
	PropsWithChildren,
	createContext,
	useContext,
	useState,
	useEffect,
	use,
} from "react"

import { toast } from "react-toastify"
import { useLocalStorage } from "usehooks-ts"

type ShopContextValues = {
	showCart: boolean
	setShowCart: (showCart: boolean) => void
	cartItems: any
	setCartItems: (cartItems: any) => void
	totalPrice: number
	setTotalPrice: (totalPrice: number) => void
	totalQuantities: number
	setTotalQuantities: (totalQuantities: number) => void
	qty: number
	setQty: (qty: number) => void
	size: Size | undefined
	setSize: (size: Size) => void
	incQty: () => void
	decQty: () => void
	onAdd: (product: Product, quantity: number) => void
	onRemove: (product: Product) => void
	toggleCartItemQuantity: (
		id: string,
		value: string,
		itemSize: Size | undefined
	) => void
}

const Context = createContext<ShopContextValues>({
	showCart: false,
	setShowCart: () => {},
	cartItems: [],
	setCartItems: () => {},
	totalPrice: 0,
	setTotalPrice: () => {},
	totalQuantities: 0,
	setTotalQuantities: () => {},
	qty: 1,
	setQty: () => {},
	size: undefined,
	setSize: () => {},
	incQty: () => {},
	decQty: () => {},
	onAdd: () => {},
	onRemove: () => {},
	toggleCartItemQuantity: () => {},
})

export const StateContext: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	const [showCart, setShowCart] = useState(false)
	const [cartItems, setCartItems] = useLocalStorage<Product[]>("cart", [])
	const [totalPrice, setTotalPrice] = useLocalStorage<number>("total", 0)
	const [totalQuantities, setTotalQuantities] = useLocalStorage<number>(
		"quantity",
		0
	)

	useEffect(() => {
		const cartItems = JSON.parse(localStorage.getItem("cart") || "[]")
		const totalPrice = JSON.parse(localStorage.getItem("total") || "0")
		const totalQuantities = JSON.parse(localStorage.getItem("quantity") || "0")

		setCartItems(cartItems)
		setTotalPrice(totalPrice)
		setTotalQuantities(totalQuantities)
	}, [])

	const [qty, setQty] = useState(1)
	const [size, setSize] = useState<Size | undefined>(undefined)

	let foundProduct: Product | undefined
	let index

	const onAdd = (product: Product, quantity: number) => {
		const checkProductInCart = cartItems.find(
			(item) => item._id === product._id && item.size === product.size
		)
		product.is_discounted
			? setTotalPrice(
					(prevTotalPrice) =>
						prevTotalPrice +
						((product.discounted_price as number) || product.price) * quantity
			  )
			: setTotalPrice(
					(prevTotalPrice) => prevTotalPrice + product.price * quantity
			  )

		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

		if (checkProductInCart) {
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (
					cartProduct._id === product._id &&
					cartProduct.size === product.size
				)
					return {
						...cartProduct,
						quantity: (cartProduct.quantity || 0) + quantity,
					}
			})
			setCartItems(updatedCartItems as Product[])
		} else {
			product.quantity = quantity

			setCartItems([...cartItems, { ...product }])
		}

		toast.success(`${qty} ${product.name} added to the cart.`)
		setQty(1)
	}

	const onRemove = (product: Product) => {
		foundProduct = cartItems.find(
			(item) => item._id === product._id && item.size === product.size
		) as Product
		const newCartItems = cartItems.filter((item) => item.size !== product.size)
		// const newCartItems = cartItems.filter((item) => item._id !== product._id)

		foundProduct.is_discounted
			? setTotalPrice(
					(prevTotalPrice) =>
						prevTotalPrice -
						((foundProduct!.discounted_price as number) ||
							foundProduct!.price) *
							foundProduct!.quantity!
			  )
			: setTotalPrice(
					(prevTotalPrice) =>
						prevTotalPrice - foundProduct!.price * foundProduct!.quantity!
			  )

		setTotalQuantities(
			(prevTotalQuantities) => prevTotalQuantities - foundProduct!.quantity!
		)
		setCartItems(newCartItems)
	}

	const toggleCartItemQuantity = (
		id: string,
		value: string,
		itemSize: Size | undefined
	) => {
		foundProduct = cartItems.find(
			(item) => item._id === id && item.size === itemSize
		) as Product
		index = cartItems.findIndex((product) => product._id === id)
		const newCartItems = cartItems.filter((item) => item._id !== id)

		if (value === "inc") {
			setCartItems((prevCartItems) =>
				prevCartItems.map((item) => {
					if (item._id === id && item.size === itemSize) {
						return { ...item, quantity: foundProduct!.quantity! + 1 }
					}
					return item
				})
			)

			foundProduct.is_discounted
				? setTotalPrice(
						(prevTotalPrice) =>
							prevTotalPrice +
							((foundProduct!.discounted_price as number) ||
								foundProduct!.price)
				  )
				: setTotalPrice(
						(prevTotalPrice) => prevTotalPrice + foundProduct!.price
				  )

			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
		} else if (value === "dec") {
			if (foundProduct.quantity! > 1) {
				setCartItems((prevCartItems) =>
					prevCartItems.map((item) => {
						if (item._id === id && item.size === itemSize) {
							return { ...item, quantity: foundProduct!.quantity! - 1 }
						}
						return item
					})
				)
				foundProduct.is_discounted
					? setTotalPrice(
							(prevTotalPrice) =>
								prevTotalPrice -
								((foundProduct!.discounted_price as number) ||
									foundProduct!.price)
					  )
					: setTotalPrice(
							(prevTotalPrice) => prevTotalPrice - foundProduct!.price
					  )
				setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
			}
		}
	}

	const incQty = () => {
		setQty((prevQty) => {
			if (prevQty + 1 > 10) return 10

			return prevQty + 1
		})
	}

	const decQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1

			return prevQty - 1
		})
	}

	return (
		<Context.Provider
			value={{
				showCart,
				setShowCart,
				cartItems,
				setCartItems,
				totalPrice,
				setTotalPrice,
				totalQuantities,
				setTotalQuantities,
				qty,
				setQty,
				size,
				setSize,
				incQty,
				decQty,
				onAdd,
				onRemove,
				toggleCartItemQuantity,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)
