import Classement from "@/app/components/equipeSection/Classement"
import MainBar from "@/app/components/equipeSection/MainBar"
import { getClassement } from "@/app/utils/getClassement"
import { getGlobalConfigImages } from "@/sanity/utils/blog/getConfig"
import { getTeams } from "@/sanity/utils/blog/getEquipes"

export async function generateStaticParams() {
	const teams = await getTeams()

	return teams.map((equipe) => ({
		equipe: equipe.slug,
	}))
}

const ClassementPage = async () => {
	const classement = await getClassement()
	const globalConfigImages = await getGlobalConfigImages()

	const logoRcr = globalConfigImages.filter(
		(image) => image.slug === "logo-club"
	)

	return (
		<div>
			<MainBar menuName="classement" />
			<div className="my-8 px-2">
				<Classement classement={classement} logoRcr={logoRcr[0].image_url} />
			</div>
		</div>
	)
}
export default ClassementPage
