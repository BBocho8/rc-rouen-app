import clientConfig from "@/sanity/config/client-config"
import { TeamApiResponse } from "@/sanity/types/Team"
import { createClient, groq } from "next-sanity"

export async function getTeams(): Promise<TeamApiResponse> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "teams"] {
      _id,
      title,
      'slug': slug.current,
      color,

    }`
	)
}
