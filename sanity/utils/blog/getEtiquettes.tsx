import { createClient, groq } from "next-sanity"
import clientConfig from "@/sanity/config/client-config"
import { EtiquettesApiResponse } from "@/sanity/types/Etiquettes"

export async function getEtiquettes(): Promise<EtiquettesApiResponse> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "etiquettes"] {
      _id,
      title,
     
      'slug': slug.current,

    }`
	)
}
