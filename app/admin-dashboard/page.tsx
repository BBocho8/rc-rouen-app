import Link from "next/link"

const boxes = [
	{
		name: "Produits",
		link: "/products",
	},
	{
		name: "Commandes",
		link: "/orders",
	},
]

const AdminDashboard = () => {
	return (
		<>
			<h1 className="my-4 text-center text-3xl font-medium">ADMIN DASHBOARD</h1>
			<div className="my-8 mx-auto flex flex-wrap justify-center items-center gap-x-8">
				{boxes.map((box) => {
					return (
						<div
							key={box.name}
							className="bg-primary text-white p-10 w-60 flex justify-center items-center"
						>
							<Link href={`/admin-dashboard${box.link}`}>
								<span className="font-bold text-xl">{box.name}</span>
							</Link>
						</div>
					)
				})}
			</div>
		</>
	)
}
export default AdminDashboard
