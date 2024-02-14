import { LegalPage } from "@/sanity/types/LegalPages"
import { Paper } from "@mui/material"
import ProseableText from "./ProseableText"

type SingleLegalPageProps = {
	legalPage: LegalPage
	legalPages: LegalPage[]
}

const SingleLegalPage = ({ legalPage, legalPages }: SingleLegalPageProps) => {
	return (
		<section>
			<Paper
				elevation={15}
				square
				className=" p-4 sm:p-12 bg-white  mx-auto max-w-2xl lg:max-w-[56rem] my-8"
			>
				<h1 className="flex justify-center items-center">{legalPage.name}</h1>
				<div className="border-b border-b-gray-100 my-5 sm:my-8  "></div>
				<ProseableText post={legalPage.content} />
			</Paper>
		</section>
	)
}
export default SingleLegalPage
