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
		openGraph: {
			images: [
				{
					url: new URL(`${post.image_url}`),
					width: 1200,
					height: 630,
					alt: "OpenGraph Image of the website",
				},
			],
		},
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
