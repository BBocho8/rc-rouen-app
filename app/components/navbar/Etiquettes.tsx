import { Etiquettes as EtiquettesType } from "@/sanity/types/Etiquettes"
import Link from "next/link"

type EtiquettesProps = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	etiquettes: EtiquettesType[]
}

const Etiquettes = ({ setIsOpen, etiquettes }: EtiquettesProps) => {
	return (
		<div className="w-[16.8rem] flex flex-wrap justify-between items-center gap-y-3 ">
			{etiquettes.map((etiquette) => {
				return (
					<Link
						key={etiquette._id}
						href={`/${etiquette.slug}`}
						onClick={() => setIsOpen(false)}
					>
						<div className="w-32 bg-gray-300 p-1.5 rounded-sm hover:bg-gray-400 cursor-pointer ">
							<p className="uppercase text-body text-center text-sm tracking-wide font-medium shadow-sm">
								{etiquette.title}
							</p>
						</div>
					</Link>
				)
			})}
		</div>
	)
}
export default Etiquettes
