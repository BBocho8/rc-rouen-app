import { createClient, groq } from "next-sanity"
import clientConfig from "../../config/client-config"
import { LegalPage } from "@/sanity/types/LegalPages"

export async function getLegalPages(): Promise<LegalPage[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "legalPages"]{
      _id,
      name,
      "slug": slug.current,
      content
    }`
	)
}

export async function getLegalPage(slug: string): Promise<LegalPage> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "legalPages" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      content
    }`,
		{ slug }
	)
}
