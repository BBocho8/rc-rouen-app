import OrdersFilter from "@/app/components/admin-dashboard/OrdersFilter"
import OrdersPagination from "@/app/components/admin-dashboard/OrdersPagination"
import OrdersTable from "@/app/components/admin-dashboard/OrdersTable"
import { getPosts } from "@/sanity/sanity-utils"

import { getOrders } from "@/sanity/utils/admin/getOrders"

const BlogPostsPage = async () => {
	const blogPosts = await getPosts()

	if (!blogPosts.length) {
		return <div>No posts found</div>
	}

	return <div className="flex flex-col items-center">Hellooooooo</div>
}
export default BlogPostsPage

export const dynamic = "force-dynamic"
