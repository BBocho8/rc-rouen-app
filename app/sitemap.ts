import { getPosts } from "@/sanity/sanity-utils"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getPosts()

	const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/content/${post.slug}`,
		lastModified: new Date(post._updatedAt),
	}))

	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
		},
		...postEntries,
	]
}
