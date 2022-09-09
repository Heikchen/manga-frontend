import {Link} from "react-router-dom"

function AnimeShelf(props:any){
    return(<div>
        <h2 className="font-quicksand text-primary-white-color text-2xl font-semibold w-full bg-primary-red-color h-12 mt-6 p-2 uppercase">My Animes</h2>
     <div className="min-h-4 mt-6 flex mb-6 flex-wrap sm:justify-center">
       
            {props.myAnimes?.map((myAnimesObject:any)=>(<div className="h-80 relative w-60 border-b-8 flex justify-center items-center">
                <Link to={`/anime/${myAnimesObject.id}`}>
                    <img className="w-48 shrink-0"src={myAnimesObject.main_picture.medium}/>
                    </Link>
                    </div>))}
       
   </div>
    </div>)
}
export default AnimeShelf;