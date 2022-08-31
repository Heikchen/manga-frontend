function Search(){
    return(<div className="w-full mb-6 flex justify-between items-center gap-2 border-b-4 pb-6 border-b-primary-red-color">
        <h1 className="text-primary-white-color font-bold text-3xl sm:text-xl w-1/4 ">Search for...</h1>
        <input className="w-3/4 h-12 placeholder:text-primary-black-color  focus:outline-primary-red-color text-primary-black-color p-4 " type="text" name="search" placeholder="Animes & Mangas"/>
    </div>)
}
export default Search;