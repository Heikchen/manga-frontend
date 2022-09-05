function MangaShelf(props:any){

    return(<div>
         <h2 className="font-quicksand text-primary-white-color text-2xl font-semibold w-full bg-primary-red-color h-12 mt-6 p-2 uppercase">My Mangas</h2>
    <div className="min-h-4 mt-6 flex mb-6 flex-wrap sm:justify-center">
       
            {props.myMangas?.map((myMangasObject:any)=>( <div className="h-80 w-52 border-b-8  flex justify-center items-center"> <img className="w-48"src={myMangasObject.main_picture.medium}/> </div>))}
       
   </div>
    </div>)
}
export default MangaShelf;