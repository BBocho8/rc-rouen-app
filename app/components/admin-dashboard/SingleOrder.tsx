import { GoTrash } from "react-icons/go"
import OrdersFilter from "./OrdersFilter"
import Image from "next/image"

const SingleOrder = () => {
	return (
		<div className="my-8">
			<div className="flex justify-center w-96 mx-auto bg-red-200 my-4 py-6 px-8 rounded-sm">
				<p className="flex flex-col items-center ">
					<span className="font-semibold text-xl uppercase ">Client</span>
					<span>Herr Hermann Krings</span>
					<span>Auf Dem Weihserthausen, 25</span>
					<span className="font-medium">12345 Bonn, Germany</span>
				</p>
			</div>
			<p className=" text-lg flex justify-center items-center gap-x-2">
				Order ID: <span className="text-2xl font-light"> 1312UKDDIJ331</span>
			</p>
			<div className="flex flex-col justify-center items-center my-2">
				<div className="flex justify-center items-center">
					Status :
					<OrdersFilter />
				</div>
			</div>

			<table className="table-auto w-full border-collapse my-6 ">
				<thead>
					<tr className="border-b border-b-gray-300">
						<th className="table-header">Produit</th>
						<th className="table-header">Quantité</th>
						<th className="table-header">Taille</th>
						<th className="table-header  pl-16">Prix</th>
						<th className="table-header  ">????</th>
					</tr>
				</thead>
				<tbody className="[&>*:nth-child(odd)]:bg-gray-200 [&>*:nth-child(even)]:bg-gray-100 ">
					<tr className="bg-gray-100">
						<td className="">
							<div className="flex justify-start items-center gap-x-4 py-4 px-8">
								<Image
									src="https://cdn.sanity.io/images/nzugz8po/production/abf20d6b59b996929ced7dc5e05e489fbaa3428e-414x414.png"
									alt="test"
									height={75}
									width={75}
									className="aspect-square"
								/>
								<p className="text-lg font-light tracking-wide  ">
									Maillot PSG
								</p>
							</div>
						</td>
						<td className="table-data">2</td>
						<td className="table-data">M</td>
						<td className="table-data text-lg pl-16">50€</td>
						<td>
							<div
								className="flex justify-center items-center cursor-pointer "
								title="Supprimer"
							>
								<span>????</span>
							</div>
						</td>
					</tr>
					<tr className="bg-gray-100">
						<td className="">
							<div className="flex justify-start items-center gap-x-4 py-4 px-8">
								<Image
									src="https://cdn.sanity.io/images/nzugz8po/production/abf20d6b59b996929ced7dc5e05e489fbaa3428e-414x414.png"
									alt="test"
									height={75}
									width={75}
									className="aspect-square"
								/>
								<p className="text-lg font-light tracking-wide  ">
									Maillot PSG
								</p>
							</div>
						</td>
						<td className="table-data">2</td>
						<td className="table-data">M</td>
						<td className="table-data text-lg pl-16">50€</td>
						<td>
							<div
								className="flex justify-center items-center cursor-pointer "
								title="Supprimer"
							>
								<span>????</span>
							</div>
						</td>
					</tr>
					<tr className="bg-gray-100">
						<td className="">
							<div className="flex justify-start items-center gap-x-4 py-4 px-8">
								<Image
									src="https://cdn.sanity.io/images/nzugz8po/production/abf20d6b59b996929ced7dc5e05e489fbaa3428e-414x414.png"
									alt="test"
									height={75}
									width={75}
									className="aspect-square"
								/>
								<p className="text-lg font-light tracking-wide  ">
									Maillot PSG
								</p>
							</div>
						</td>
						<td className="table-data">2</td>
						<td className="table-data">M</td>
						<td className="table-data text-lg pl-16">50€</td>
						<td>
							<div
								className="flex justify-center items-center cursor-pointer "
								title="Supprimer"
							>
								<span>????</span>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<div className="flex justify-end items-start ">
				<div className="flex flex-col justify-center items-start pt-2 px-16 w-[350px] ">
					<p className="flex justify-between w-full font-light">
						Total: <span>34,50€</span>
					</p>
					<p className="flex justify-between w-full font-light">
						Livraison: <span>8,50€</span>
					</p>
					<p className="flex justify-between w-full font-medium text-lg mt-2">
						Montant Total: <span>43,00€</span>
					</p>
				</div>
			</div>
		</div>
	)
}
export default SingleOrder
