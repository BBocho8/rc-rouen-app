import Link from "next/link"

export type MenuItem = {
	name: string
	link: string
}

type getFooterMenuProps = {
	arr: MenuItem[]
	name: string
}

const getFooterMenu = ({ name, arr }: getFooterMenuProps) => {
	return (
		<div className="flex flex-col gap-y-4 items-start">
			<span className="capitalize font-bold text-xl">{name}</span>
			<ul className="flex flex-col gap-y-0.5 items-start">
				{arr.map((item) => {
					return (
						<li key={`${item.link} - ${item.name}`} className="capitalize">
							<Link
								href={item.link}
								className="hover:border-b hover:pb-0.5 hover:border-black text-lg"
							>
								{item.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default getFooterMenu
