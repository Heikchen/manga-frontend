import {Link} from "react-router-dom";
import React from "react";
import axios from "axios";
import BrowseAnime from "./BrowseAnime";
import BrowseManga from "./BrowseManga";
import Search from "./Search";

function Home(){
    
    return(<div className="min-h-4 w-full mt-6 font-quicksand overflow-hidden">
        <Search/>
        <div className="flex justify-between w-full mb-6 gap-6">
          
<button className=" text-primary-white-color bg-primary-red-color  w-1/2 h-12 uppercase font-bold text-2xl sm:text-lg active:scale-95">MangaShelf</button>

<button className="text-primary-white-color bg-primary-red-color  w-1/2 h-12 uppercase font-bold text-2xl sm:text-lg active:scale-95">AnimeShelf</button>
</div>

<div className="h-12 bg-primary-red-color ">
<h2 className="uppercase font-bold text-3xl sm:text-lg sm:p-2 text-primary-white-color ml-3 p-1">Mangas - Top 10</h2>
</div>
<div className="flex h-80 items-center  w-full overflow-x-scroll gap-4">
 <BrowseManga  />
</div>
<div className="h-12 bg-primary-red-color ">
<h2 className="uppercase font-bold text-3xl  sm:text-lg sm:p-2 text-primary-white-color ml-3 p-1">Animes - Top 10</h2>
</div>
<div className="h-80">
    <BrowseAnime/>
</div>
    </div>)
}
export default Home;