import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function TopAnime(){
    const [page, setPage]= React.useState<number>(10);
    const [isDisabled, setIsDisabled]=React.useState<boolean>(true);
     const [animes, setAnimes]=React.useState<any>([]);
    const [offset, setOffset]=React.useState<number>(0);
    const [isLoading, setLoading]=React.useState<boolean>(false)
 
    
    const fetchAnimes =():void => {
        setLoading(true);
        axios.get(`http://localhost:7020/anime/ranking?ranking_type=all&limit=10&offset=${offset}`, {
            headers: {
                'x-mal-client-id': 'b67859a9dc4d5c8d747d16656e7d4f19'
            }
        })
        .then((response) => {setAnimes(response.data.data);
        setLoading(false)})
    }
React.useEffect(()=>{fetchAnimes()},[page])
    const handleClickNext =():void=>{
        setPage((page)=>page+10)
        setOffset((offset)=> offset +10)
        setIsDisabled(false);
        console.log(page)
    }
     const handleClickPrevious =():void=>{
        if (page > 10){
        setPage((page)=>page-10)
         setOffset((offset)=> offset -10)
        console.log(page)
    if(page === 20){
        setIsDisabled(true)
    }}
    }
    return(<div className="min-h-4">
        <div className="bg-primary-red-color text-primary-white-color h-12 mt-6 mb-6">
            <h1 className="font-semibold uppercase text-3xl pt-1 ml-3 sm:text-lg sm:p-2">Top {page} Animes</h1>
        </div>
         <div className="flex gap-4 flex-wrap justify-center ">
           {isLoading ? (<Spinner/>):(animes.map((topanimesObject:any)=>(<Link to={`/anime/${topanimesObject.node.id}`}><div key={topanimesObject.node.id} className="group w-48 relative h-72 shrink-0"><img className="h-72 m-auto" src={topanimesObject.node.main_picture.medium}/><h1 className="invisible group-hover:visible absolute bottom-6 w-full text-primary-white-color flex items-center justify-center min-h-12 text-2xl bg-primary-red-color text-center">{topanimesObject.node.title}</h1><h1 className="invisible group-hover:visible absolute bottom-60 left-4 text-2xl p-1 text-center min-w-8 bg-primary-red-color text-primary-white-color">{topanimesObject.ranking?.rank}</h1></div></Link>)))} 
        </div>
        <div className="flex gap-6">
        <button onClick={handleClickPrevious}className="bg-primary-red-color text-primary-white-color uppercase w-36 h-10 rounded-2xl mt-6 mb-6 disabled:opacity-50 active:enabled:scale-95" disabled={isDisabled}>Previous</button>
        <button onClick={handleClickNext}className="bg-primary-red-color text-primary-white-color uppercase w-36 h-10 rounded-2xl mt-6 mb-6 active:enabled:scale-95">Next</button>
        </div>
    </div>)
}
export default TopAnime;