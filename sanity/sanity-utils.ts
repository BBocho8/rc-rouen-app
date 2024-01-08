import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"
import { Project } from "./types/Project"
import { Post, PostApiResponse } from "./types/Post"

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
