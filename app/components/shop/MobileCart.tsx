import { twMerge } from "tailwind-merge"
import styles from "./Cart.module.css"
import { useStateContext } from "@/app/context/StateContext"
import { BsStripe } from "react-icons/bs"
import { FaCcStripe } from "react-icons/fa6"

const MobileCart = () => {
	const { showCart, setShowCart } = useStateContext()

	return (
		showCart && (
			<section
				className={twMerge(
					styles["mobile-cart-container"],
					styles["slide-in-right"],
					"sm:hidden "
				)}
			>
				<div className={twMerge(styles["mobile-cart-items-container"])}>
					<span onClick={() => setShowCart(false)}>close</span>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
						quas harum dignissimos nobis et deleniti voluptatibus nulla dolores
						numquam dicta sint laboriosam fugit obcaecati est quo quae,
						doloremque esse expedita corrupti quisquam consectetur voluptatem at
						doloribus vero? Quis voluptatum fugit modi hic eligendi quae vitae
						ab voluptatem itaque eaque odio recusandae perferendis sit quo
						eveniet quos voluptatibus ut, tempore deleniti. Autem iste quae
						dicta magnam. Temporibus est id, labore repellendus quo, doloremque
						recusandae culpa saepe asperiores quaerat soluta vitae! Eveniet
						voluptatem dolorum voluptas repellendus nobis excepturi non magnam
						accusamus? Dolorem deserunt debitis doloribus repudiandae maxime
						deleniti, eaque delectus quia natus excepturi. Odit libero sit eaque
						soluta incidunt aperiam perferendis assumenda autem quasi doloribus
						mollitia tempore, voluptate adipisci consequatur alias ab! Fugiat
						animi natus, sapiente, voluptatem doloremque ad similique odit
						temporibus est enim, aspernatur dolor deleniti. Ad neque, veniam
						quisquam aliquam itaque asperiores laborum fuga veritatis sed? Vitae
						nam hic ad! Quasi laborum reprehenderit doloribus? Cupiditate odio
						totam, hic voluptate laudantium facilis dolore velit quasi numquam
						quis, quam, dicta ea. Accusamus doloremque dicta nihil debitis quis
						quisquam, veritatis illum? Nesciunt perferendis doloribus, inventore
						eveniet dolores tempore placeat ad officia odit cupiditate eaque
						tempora eligendi molestias, sequi quibusdam voluptas, natus odio
						rerum non? Laboriosam soluta repellendus nisi corrupti qui facere
						similique corporis deserunt incidunt velit sunt quas suscipit eaque
						labore, aut molestiae voluptatibus, consequatur voluptate accusamus?
						Aut reiciendis fuga cupiditate molestiae illum assumenda officia
						delectus corporis nisi? Consequatur aut minima culpa voluptas qui
						ratione dolorem fugiat et odio sunt obcaecati nobis, similique iure
						amet enim, illum veniam vero magni quas minus, sapiente numquam
						reprehenderit illo! Neque beatae quibusdam ratione in aliquid sunt
						sit. Deleniti ab, facere quis minus et iste praesentium maxime
						tempora debitis aut molestias adipisci aperiam aspernatur ipsa
						perspiciatis, inventore explicabo neque eaque. Possimus qui
						accusantium fuga sed deleniti. Nobis, blanditiis asperiores tempore
						commodi dolores dolorem nesciunt? Reprehenderit, asperiores quasi
						cupiditate, illo ratione magni similique dolorum, consectetur
						eligendi quis doloribus ea odio obcaecati ipsa aliquam vitae nam
						placeat eos voluptates. Libero voluptatem hic, iure mollitia
						voluptatibus amet odit perferendis tenetur commodi aut corporis
						beatae omnis. Ducimus, eveniet. Impedit nulla itaque, harum ipsam,
						ut consequatur eius nihil nostrum at odio dicta laboriosam? Officiis
						incidunt cum laboriosam saepe praesentium, molestias reiciendis
						necessitatibus, amet magni doloremque qui recusandae neque, nisi
						maxime quo eos odit consequuntur dolore beatae deleniti consequatur
						et ab ad? Esse adipisci praesentium facilis assumenda cum quisquam,
						dignissimos ipsa ratione commodi iure provident voluptatum rerum
						veritatis. Minus, nesciunt. Voluptate, laboriosam ipsam sunt animi
						voluptates soluta debitis est temporibus? Vel repellendus corporis
						et nulla placeat! Labore sunt ratione dolorum cumque. Animi rerum
						consequuntur corporis numquam odio modi laborum commodi totam est
						laudantium itaque reprehenderit architecto quisquam, deleniti
						quaerat quod nemo magni dolores asperiores. Perferendis eveniet
						iusto repellendus veniam obcaecati voluptatibus. Est repudiandae rem
						fugiat blanditiis nostrum nesciunt dignissimos, distinctio dicta
						corporis! Quasi illo, voluptatem molestiae, incidunt vel atque vero
						libero tempora officia deserunt illum, repellat itaque modi
						consequatur tempore asperiores sed. Accusamus facere ducimus fugit
						praesentium et aliquam aut in similique voluptatibus!
					</p>
				</div>
				<div className={twMerge(styles["mobile-cart-details-container"])}>
					<p className="self-end  text-white font-medium text-lg tracking-wider">
						Total: 96.99€
					</p>
					<button className=" w-full uppercase text-lg font-bold text-white bg-complementary-dark  py-4 rounded-md cursor-pointer hover:bg-complementary">
						BUY NOW
					</button>
					<p className="flex justify-center items-center gap-x-2 text-xs font-medium">
						Secured by <FaCcStripe size={30} />
					</p>
				</div>
			</section>
		)
	)
}
export default MobileCart
