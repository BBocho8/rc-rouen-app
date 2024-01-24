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
		<div className="flex flex-col gap-y-2 items-center">
			<span className="capitalize font-bold">{name}</span>
			<ul className="flex flex-col gap-y-0.5 items-center">
				{arr.map((item) => {
					return (
						<li key={item.link} className="capitalize">
							<Link
								href={item.link}
								className="hover:border-b hover:pb-0.5 hover:border-black"
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
