"use client"

import { Classement } from "@/app/types/classement"
import styles from "./Classement.module.css"
import { twMerge } from "tailwind-merge"
import { text } from "stream/consumers"
import logo from "@/public/logoTest.png"
import notAvailable from "@/public/notAvailable.png"
import Image from "next/image"

type ClassementProps = {
	classement: Classement
}

const theadItem = [
	"pos",
	"équipe",
	"pts",
	"j",
	"g",
	"n",
	"p",
	"bp",
	"bc",
	"diff.",
]

const Classement = ({ classement }: ClassementProps) => {
	const rankings = classement.rankings[0].teams

	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr className="text-center border">
						{theadItem.map((item) => {
							return (
								<th
									key={item}
									className={twMerge(
										"uppercase px-2 border border-slate-200",
										item === "équipe" && "text-left",
										item === "bp" || item === "bc" || item === "diff."
											? "hidden sm:table-cell "
											: ""
									)}
								>
									{item}
								</th>
							)
						})}
					</tr>
				</thead>
				<tbody className="[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-slate-100">
					{rankings.map((ranking, index) => {
						const teamLogo = ranking.logo
							? `https://v1.scorenco.com${ranking.logo}`
							: ranking.name.toLowerCase() === "racing club de rouen"
							? logo
							: notAvailable

						return (
							<tr
								key={ranking.clubId}
								className={twMerge(
									"text-center uppercase font-light text-sm tracking-tight "
								)}
								style={{
									color: ranking.name === "Racing Club de Rouen" ? "#fff" : "",
									backgroundColor:
										ranking.name === "Racing Club de Rouen" ? "#851440" : "",
								}}
							>
								<td className={`font-bold ${styles.borderX}`}>{index + 1}</td>
								<td className="text-left flex items-center gap-x-4 px-2 py-2">
									<Image
										src={teamLogo}
										alt="Paris"
										width={35}
										height={35}
										className={twMerge(
											"translate-x-[5px] aspect-square hidden sm:block",
											!teamLogo &&
												ranking.name !== "Racing Club de Rouen" &&
												"opacity-10"
										)}
									/>
									<Image
										src={teamLogo}
										alt="Paris"
										width={20}
										height={20}
										className={twMerge(
											"translate-x-[5px] aspect-square sm:hidden",
											!teamLogo &&
												ranking.name !== "Racing Club de Rouen" &&
												"opacity-10"
										)}
									/>
									<span className="line-clamp-2 font-medium ">
										{ranking.name}
									</span>
								</td>
								<td className={styles.borderX}>{ranking.data[0].pts}</td>
								<td className={styles.borderX}>{ranking.data[1].jo}</td>
								<td className={styles.borderX}>{ranking.data[2].g}</td>
								<td className={styles.borderX}>{ranking.data[3].n}</td>
								<td className={styles.borderX}>{ranking.data[4].p}</td>
								<td className={`${styles.borderX} hidden sm:table-cell`}>
									{ranking.data[6].bp}
								</td>
								<td className={`${styles.borderX} hidden sm:table-cell`}>
									{ranking.data[7].bc}
								</td>
								<td className={`${styles.borderX} hidden sm:table-cell`}>
									{ranking.data[8].diff}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
export default Classement
