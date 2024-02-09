import SingleOrder from "@/app/components/admin-dashboard/SingleOrder"
import { getPost, getPosts } from "@/sanity/sanity-utils"
import post from "@/sanity/schema/post-schema"

export async function generateStaticParams() {
	const blogPosts = await getPosts()

	return blogPosts.map((post) => ({
		postID: post._id,
	}))
}

const SingleBlogPostPage = async ({
	params,
}: {
	params: { postID: string }
}) => {
	const blogPost = await getPost(params.postID)

	if (!blogPost) {
		return <div>Post not found</div>
	}

	return <p>Hello World !!!!</p>
}
export default SingleBlogPostPage
