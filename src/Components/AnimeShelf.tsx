import {Link} from "react-router-dom"

function AnimeShelf(props:any){
    return(<div>
        <h2 className="font-quicksand text-primary-white-color text-2xl font-semibold w-full bg-primary-red-color h-12 mt-6 p-2 uppercase">My Animes</h2>
     <div className="min-h-4 mt-6 flex mb-6 flex-wrap sm:justify-center">
       
            {props.myAnimes?.map((myAnimesObject:any)=>(<div className="group h-80 relative w-60 border-b-8 flex justify-center items-center">
                <Link to={`/anime/${myAnimesObject.id}`}>
                    <img className="w-48 shrink-0"src={myAnimesObject.main_picture.medium}/>
                    </Link>
                    <div className="invisible group-hover:visible absolute z-10 flex justify-center bottom-12">
                        <button onClick={()=>props.removeAnime(myAnimesObject)}className=" bg-primary-red-color w-48 h-10 rounded-3xl mb-4 uppercase active:scale-95">Delete</button>
                    </div>
                    </div>))}
       
   </div>
    </div>)
}
export default AnimeShelf;