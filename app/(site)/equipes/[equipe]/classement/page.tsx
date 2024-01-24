import Classement from "@/app/components/equipeSection/Classement"
import MainBar from "@/app/components/equipeSection/MainBar"
import { getClassement } from "@/app/utils/getClassement"

const ClassementPage = async () => {
	const classement = await getClassement()

	return (
		<div>
			<MainBar menuName="classement" />
			<div className="my-8 px-2">
				<Classement classement={classement} />
			</div>
		</div>
	)
}
export default ClassementPage
