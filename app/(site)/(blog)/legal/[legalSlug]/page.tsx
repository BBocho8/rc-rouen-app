import NotFound from "@/app/(site)/(shop)/shop/[productSlug]/not-found"
import SingleLegalPage from "@/app/components/blog/SingleLegalPage"
import { getLegalPage, getLegalPages } from "@/sanity/utils/blog/getLegalPages"

export async function generateMetadata({
	params,
}: {
	params: { legalSlug: string }
}) {
	const legalPage = await getLegalPage(params.legalSlug)
	const title = legalPage.name

	return {
		title,
	}
}

export async function generateStaticParams() {
	const legalPages = await getLegalPages()

	return legalPages.map((legalPage) => ({
		legalSlug: legalPage.slug,
	}))
}

const LegalPage = async ({ params }: { params: { legalSlug: string } }) => {
	const legalPage = await getLegalPage(params.legalSlug)
	const legalPages = await getLegalPages()

	if (legalPage === null) {
		return <NotFound />
	}

	return <SingleLegalPage legalPages={legalPages} legalPage={legalPage} />
}
export default LegalPage
