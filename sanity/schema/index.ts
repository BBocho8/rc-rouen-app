import author from "./author-schema"
import banner from "./banner"
import blockContent from "./block-quote"
import category from "./category-schema"
import etiquettes from "./etiquettes"
import globalConfig from "./global-images"
import orders from "./orders-schema"
import post from "./post-schema"
import product from "./product"
import project from "./project-schema"
import shopRubriques from "./shop-rubriques"
import teams from "./teams-schema"
import legalPages from "./legal-page-schema"

const schemas = [
	globalConfig,
	teams,
	post,
	author,
	category,
	project,
	blockContent,
	product,
	banner,
	etiquettes,
	shopRubriques,
	orders,
	legalPages,
]

export default schemas
