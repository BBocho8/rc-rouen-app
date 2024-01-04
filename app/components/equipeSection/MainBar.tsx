import Link from "next/link"
import { twMerge } from "tailwind-merge"

const menuItem = [
	{
		name: "Actualité",
		id: "actualite",
	},
	{
		name: "Effectif",
		id: "effectif",
	},
	{
		name: "Calendrier et resultats",
		id: "calendrier-et-resultat",
	},
	{
		name: "Classement",
		id: "classement",
	},
]

type MainBarProps = {
	menuName: "actualite" | "effectif" | "calendrier-et-resultat" | "classement"
	equipe: string
}

const MainBar = ({ menuName, equipe }: MainBarProps) => {
	return (
		<div className="  bg-white flex flex-col md:flex-row items-center justify-center pt-5 ">
			<span className="px-8 uppercase font-medium tracking-tight text-gray-400 pb-5">
				{equipe.replace("-", " ")}
			</span>
			<div className="flex justify-center flex-wrap items-center grow gap-x-2 gap-y-3 sm:gap-y-0 sm:gap-x-10 text-center">
				{menuItem.map((item) => {
					return (
						<span
							key={item.id}
							className={twMerge(
								"text-xs uppercase font-medium tracking-tight pb-1.5 md:pb-5 md:px-2 hover:text-primary-bright cursor-pointer hover:border-b-2 hover:border-b-primary-bright hover:pb-1 md:hover:pb-4",
								item.id === menuName &&
									"text-primary-bright border-b-2 pb-1 md:pb-4 border-b-primary-bright "
							)}
						>
							<Link href={`/equipes/${equipe}/${item.id}`}>{item.name}</Link>
						</span>
					)
				})}
			</div>
		</div>
	)
}
export default MainBar
