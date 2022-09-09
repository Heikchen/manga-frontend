import {Link} from "react-router-dom";
import Popup from "./Popup";

function MangaShelf(props:any){

    return(<div>
         <h2 className="font-quicksand text-primary-white-color text-2xl font-semibold w-full bg-primary-red-color h-12 mt-6 p-2 uppercase">My Mangas</h2>
    <div className="min-h-4 mt-6 flex mb-6 flex-wrap sm:justify-center">
       
            {props.myMangas?.map((myMangasObject:any)=>(<div className="group h-80 relative w-60 border-b-8 flex justify-center items-center">
                <Link to={`/manga/${myMangasObject.id}`}>
                    <img className="w-48 shrink-0"src={myMangasObject.main_picture.medium}/>
                </Link>
                <div className="invisible absolute group-hover:visible w-140 top-12 gap-4 left-0 flex justify-center flex-col z-10">
                    <div><Popup handleReady={props.handleReady} addVolumeToManga={props.addVolumeToManga}
    volume={myMangasObject.num_volumes} manga={myMangasObject} myMangas={props.myMangas}/></div> 
    <div className=" absolute top-10 left-6">
    <button onClick={()=>props.removeManga(myMangasObject)}className=" bg-primary-red-color w-48 h-10 rounded-3xl mb-4 uppercase active:scale-95">Delete</button>
    </div>
    </div>
    </div>))}
       
   </div>
    </div>)
}
export default MangaShelf;