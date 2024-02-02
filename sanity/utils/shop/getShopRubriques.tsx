import { createClient, groq } from "next-sanity"
import clientConfig from "@/sanity/config/client-config"
import { ShopRubriquesApiResponse } from "@/sanity/types/ShopRubriques"

export async function getShopRubriques(): Promise<ShopRubriquesApiResponse> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "shopRubriques"] | order(order asc) {
      _id,
      title,
 order,
      'slug': slug.current,
     
       
    }`
	)
}
