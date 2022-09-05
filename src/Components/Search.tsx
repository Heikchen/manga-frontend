import React from "react";
import {useNavigate} from "react-router-dom";
function Search(props:any){
    let navigate = useNavigate();
   const handleKeyDown = (event:any):void => {
    if (event.keyCode === 13) {
        console.log(event.target.value)
      navigate("/search", {
        state: {
            search: event.target.value,
            
        },
      });}}
    
    return(<div className="w-full mb-6 flex justify-between items-center gap-2 border-b-4 pb-6 border-b-primary-red-color">
        <h1 className="text-primary-white-color font-bold text-3xl sm:text-adxl w-1/4 ">Search for...</h1>
        <input className="w-3/4 h-12 placeholder:text-primary-black-color  focus:outline-primary-red-color text-primary-black-color p-4 " type="text" name="search" placeholder="Animes & Mangas" onKeyDown={handleKeyDown}/>
    </div>)
}
export default Search;