import SinglePost from "@/app/components/blog/SinglePost"
import { getPost } from "@/sanity/sanity-utils"

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
