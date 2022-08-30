import Search from "./Search";

function Home(){
    return(<div className="min-h-4 w-full mt-6 font-quicksand">
        <Search/>
        <div className="flex justify-between w-full mb-6 gap-6">
<button className="text-primary-white-color bg-primary-red-color w-1/2 h-12 uppercase font-bold text-2xl">MangaShelf</button>
<button className="text-primary-white-color bg-primary-red-color w-1/2 h-12 uppercase font-bold text-2xl">AnimeShelf</button>
</div>

<div className="h-12 bg-primary-red-color ">
<h2 className="uppercase font-bold text-3xl text-primary-white-color ml-3 p-1">Mangas - Top 10</h2>
</div>
<div className="h-72"></div>
<div className="h-12 bg-primary-red-color ">
<h2 className="uppercase font-bold text-3xl text-primary-white-color ml-3 p-1">Animes - Top 10</h2>
</div>
<div className="h-80"></div>
    </div>)
}
export default Home;