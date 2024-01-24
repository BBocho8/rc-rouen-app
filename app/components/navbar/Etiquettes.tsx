import Link from "next/link"

const Etiquettes = () => {
	return (
		<div className="w-[16.8rem] flex flex-wrap justify-between items-center gap-y-3 ">
			<Link href="#">
				<div className="w-32 bg-gray-300 p-1.5 rounded-sm hover:bg-gray-400 cursor-pointer ">
					<p className="uppercase text-body text-center text-sm tracking-wide font-medium shadow-sm">
						BILLETERIE
					</p>
				</div>
			</Link>
			<Link href="/shop">
				<div className="w-32 bg-gray-300 p-1.5 rounded-sm hover:bg-gray-400 cursor-pointer ">
					<p className="uppercase text-body text-center text-sm tracking-wide font-medium shadow-sm">
						BOUTIQUE
					</p>
				</div>
			</Link>
			<Link href="#">
				<div className="w-32 bg-gray-300 p-1.5 rounded-sm hover:bg-gray-400 cursor-pointer ">
					<p className="uppercase text-body text-center text-sm tracking-wide font-medium shadow-sm">
						STADES
					</p>
				</div>
			</Link>
			<Link href="#">
				<div className="w-32 bg-gray-300 p-1.5 rounded-sm hover:bg-gray-400 cursor-pointer ">
					<p className="uppercase text-body text-center text-sm tracking-wide font-medium shadow-sm">
						EQUIPES
					</p>
				</div>
			</Link>
			<Link href="#">
				<div className="w-32 bg-gray-300 p-1.5 rounded-sm hover:bg-gray-400 cursor-pointer ">
					<p className="uppercase text-body text-center text-sm tracking-wide font-medium shadow-sm">
						ARTICLES
					</p>
				</div>
			</Link>
		</div>
	)
}
export default Etiquettes
