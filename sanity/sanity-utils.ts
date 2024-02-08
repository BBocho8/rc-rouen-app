import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"
import { Project } from "./types/Project"
import { Post, PostApiResponse } from "./types/Post"
import { Product, ProductApiResponse } from "./types/Product"
import { BannerApiResponse } from "./types/Banner"
import { Product as AdminProduct } from "@/app/types/admin-dashboard/product"

export async function getProjects(): Promise<Project[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
	)
}

export async function getProject(slug: string): Promise<Project> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
		{ slug }
	)
}
export async function getPosts(): Promise<PostApiResponse> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      publishedAt,
_updatedAt,
      'slug': slug.current,
        
        "image_url": mainImage.asset->url,
         "image_alt": mainImage.alt,
        "author": author->name,
      body,
        "categories": categories[]->title
       
    }`
	)
}

export async function getPost(postSlug: string): Promise<Post> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "post" && slug.current == $postSlug][0]{
      _id,
      title,
      publishedAt,
      _updatedAt,
      'slug': slug.current,
        
        "image_url": mainImage.asset->url,
         "image_alt": mainImage.alt,
        "author": author->name,
      body,
        "categories": categories[]->title
    }`,
		{ postSlug }
	)
}

export async function getProducts(): Promise<ProductApiResponse> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "product"] {
      _id,
      name,
      price,
      details,
      slug,
      image[] {
          "url": asset->url,
          "alt": alt
              },
      sizes,
      is_discounted,
      discounted_price,
      expedition,
      description,
      in_stock
    }`
	)
}
export async function getProduct(productSlug: string): Promise<Product> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "product" && slug == $productSlug][0] {
      _id,
      name,
      price,
      details,
      slug,
      image[] {
          "url": asset->url,
          "alt": alt
              },
      sizes,
      is_discounted,
      discounted_price,
      expedition,
      description,
      in_stock
    }`,
		{ productSlug }
	)
}
export async function getBanner(): Promise<BannerApiResponse> {
	return createClient(clientConfig).fetch(groq`*[_type == "banner"] {
    _id,
    buttonText,
    "image_url": image.asset->url,
    "image_alt": image.alt,
    discount,
    smallText,
    _createdAt,
    _updatedAt,
    desc,
    product,
    _type,
    largeText2,
    largeText1,
    midText,
    saleTime
  }`)
}

export const createProductSanity = async (newProduct: AdminProduct) => {
	const newProductSanityDB = {
		_type: "product",
		slug: newProduct.slug,
		name: newProduct.name,
		price: newProduct.price,
		expedition: newProduct.expedition,
		in_stock: newProduct.in_stock,
		is_discounted: newProduct.is_discounted,
		discounted_price: newProduct.discounted_price,
		description: newProduct.description,
		details: newProduct.details,
		sizes: newProduct.sizes,
		// image: ,
	}

	try {
		const response = await fetch(
			`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${
						process.env.NEXT_PUBLIC_SANITY_API_TOKEN as string
					}`,
				},
				body: JSON.stringify({
					mutations: [
						{
							create: newProductSanityDB,
						},
					],
				}),
			}
		)

		if (!response.ok) {
			throw new Error("Failed to update document in Sanity")
		}

		const data = await response.json()

		console.log("Product successfully added to Sanity", data)
	} catch (error) {
		console.error("Error during the creation of the document:", error)
	}
}
export const updateProductSanity = async (
	newProduct: AdminProduct,
	id: string
) => {
	const newProductSanityDB = {
		_type: "product",
		slug: newProduct.slug,
		name: newProduct.name,
		price: newProduct.price,
		expedition: newProduct.expedition,
		in_stock: newProduct.in_stock,
		is_discounted: newProduct.is_discounted,
		discounted_price: newProduct.discounted_price,
		description: newProduct.description,
		details: newProduct.details,
		sizes: newProduct.sizes,
		// image: ,
	}

	try {
		const response = await fetch(
			`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${
						process.env.NEXT_PUBLIC_SANITY_API_TOKEN as string
					}`,
				},
				body: JSON.stringify({
					mutations: [
						{
							patch: { id, set: newProductSanityDB },
						},
					],
				}),
			}
		)

		if (!response.ok) {
			throw new Error("Failed to update document in Sanity")
		}

		const data = await response.json()

		console.log("Product successfully added to Sanity", data)
	} catch (error) {
		console.error("Error during the creation of the document:", error)
	}
}
export const deleteProductSanity = async (id: string) => {
	try {
		const response = await fetch(
			`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${
						process.env.NEXT_PUBLIC_SANITY_API_TOKEN as string
					}`,
				},
				body: JSON.stringify({
					mutations: [
						{
							delete: { id },
						},
					],
				}),
			}
		)

		if (!response.ok) {
			throw new Error("Failed to update document in Sanity")
		}

		const data = await response.json()

		console.log("Product successfully added to Sanity", data)
	} catch (error) {
		console.error("Error during the creation of the document:", error)
	}
}
