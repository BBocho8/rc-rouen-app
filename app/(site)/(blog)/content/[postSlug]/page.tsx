import SinglePost from "@/app/components/blog/SinglePost"
import { getPost } from "@/sanity/sanity-utils"

export async function generateMetadata({
	params,
}: {
	params: { postSlug: string }
}) {
	const post = await getPost(params.postSlug)
	const { title } = post

	return {
		title,
	}
}

const SinglePostPage = async ({
	params,
}: {
	params: { equipe: string; postSlug: string }
}) => {
	const post = await getPost(params.postSlug)

	return (
		<div>
			<SinglePost post={post} />
		</div>
	)
}
export default SinglePostPage
