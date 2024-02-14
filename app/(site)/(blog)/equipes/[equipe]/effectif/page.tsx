import MainBar from "@/app/components/equipeSection/MainBar"
import { getTeams } from "@/sanity/utils/blog/getEquipes"

export async function generateStaticParams() {
	const teams = await getTeams()

	return teams.map((equipe) => ({
		equipe: equipe.slug,
	}))
}

const EffectifPage = () => {
	return (
		<div>
			<MainBar menuName="effectif" />
		</div>
	)
}
export default EffectifPage
