import { BsSearch } from "react-icons/bs"

const SearchInput = () => {
	return (
		<div className="relative">
			<input
				className="bg-sidenavBG w-[16.8rem] my-6 pl-8 pr-1 h-10 tracking-wide font-light text-lg placeholder-gray-400 placeholder:tracking-wide placeholder:font-light placeholder:text-lg text-body border-b border-b-gray-300 focus:outline-none focus:placeholder-body focus:border-b-gray-400 search-cancel:hidden "
				type="search"
				placeholder="Recherche"
			/>
			<BsSearch
				className="absolute top-[50%] translate-y-[-50%] left-1 text-body"
				size={14}
			/>
		</div>
	)
}
export default SearchInput
