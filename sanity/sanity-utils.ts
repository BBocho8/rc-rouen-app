import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"
import { Project } from "./types/Project"
import { Post, PostApiResponse } from "./types/Post"
import { Product, ProductApiResponse } from "./types/Product"
import { BannerApiResponse } from "./types/Banner"

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
      'slug': slug.current,
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
		groq`*[_type == "product" && slug.current == $productSlug][0] {
      _id,
      name,
      price,
      details,
      'slug': slug.current,
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
