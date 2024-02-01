import SinglePost from "@/app/components/blog/SinglePost"
import { getPost, getPosts } from "@/sanity/sanity-utils"

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

export async function generateStaticParams() {
	const posts = await getPosts()

	return posts.map((post) => ({
		postSlug: post.slug,
	}))
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
