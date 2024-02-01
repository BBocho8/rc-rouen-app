import { createClient, groq } from "next-sanity"
import clientConfig from "@/sanity/config/client-config"
import { GlobalConfigImagesApiResponse } from "@/sanity/types/GlobalConfigImages"

export async function getGlobalConfigImages(): Promise<GlobalConfigImagesApiResponse> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "global-config"] {
      _id,
      name,
    
      'slug': slug.current,
        
        "image_url": image.asset->url,
         "image_alt": image.alt,
  
       
    }`
	)
}
