import { Post } from "@/sanity/types/Post"
import { PortableText } from "@portabletext/react"
import ProseableText from "./ProseableText"

type SinglePostProps = {
	post: Post
}

const SinglePost = ({ post }: SinglePostProps) => {
	return (
		<ProseableText post={post.body} />
		// <div className="prose lg:prose-xl py-4">
		// 	<PortableText value={post.body} components={components} />
		// </div>
	)
}
export default SinglePost
