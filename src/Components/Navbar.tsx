import {Link} from "react-router-dom";

function Navbar(){
    return(
    <nav className="flex justify-between items-center w-full h-40 sm:h-60 gap-x-4 font-quicksand shadow-md p-6 border-b-4 border-primary-red-color" >
       <Link to ="/"> <div  className=" text-center w-2/5">
        <div className=" flex flex-col justify-center bg-primary-red-color w-56 h-16 sm:h-10 sm:w-40 rotate-348  outline outline-primary-red-color outline-offset-4 outline-4"  >
            <h2 className="rotate-12 uppercase font-black text-primary-white-color text-4xl sm:text-3xl ml-10 leading-8 mt-1" >Manga</h2>
              <h2 className="rotate-12 uppercase font-black text-primary-white-color text-4xl sm:text-3xl mr-10 ">Anime</h2>
        </div>
        </div>
        </Link>
        <div className="flex items-center justify-end flex-wrap gap-4 w-3/5 text-primary-white-color" >
            <Link to="/top-mangas">Top Mangas</Link>
             <Link to="/top-animes">Top Animes</Link>
             <a>MangaShelf</a>
             <a >AnimeShelf</a>
             <button className="bg-primary-red-color w-20 h-9 rounded-2xl text-primary-white-color" >Login</button>
        </div>
    </nav>)
}



export default Navbar;