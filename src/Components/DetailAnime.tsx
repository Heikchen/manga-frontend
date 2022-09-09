import axios from "axios";
import React from "react";
import {useParams, Link} from "react-router-dom";
import Spinner from "./Spinner";


function DetailAnime(props:any){
    const [detailAnime, setDetailAnime] = React.useState<any>([]);
    const [genres, setGenres]= React.useState<any>([]);
    const [recommendations, setRecommandations] = React.useState<any>([]);
    const [isLoading, setLoading]= React.useState<boolean>(false);

    let urlParamId:string | undefined= useParams().id;

    const fetchDetailAnime=():void =>{
        setLoading(true)
        axios.get(`http://localhost:7020/anime/${urlParamId}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_scoring_users,media_type,status,genres,num_episodes,start_season,rating,pictures,background,recommendations'`,
        {headers: {
                'x-mal-client-id': 'b67859a9dc4d5c8d747d16656e7d4f19'
            }})
        .then((response)=>{setDetailAnime(response.data);
        setGenres(response.data.genres);
        setRecommandations(response.data.recommendations);
        setLoading(false);
    console.log(response.data)})
    }
React.useEffect(()=>{fetchDetailAnime();
window.scrollTo(0, 0);},[urlParamId])

    return(<div>
        {isLoading ? (<Spinner/>):(<div className="font-quicksand h-fit w-full text-primary-white-color grid grid-rows-auto grid-cols-2 sm:grid-cols-1 gap-6 mt-6 mb-6"><div className="w-full flex flex-col items-center">
        <img className="w-90 rounded-2xl mb-6"src={detailAnime.main_picture?.large} />
        <button onClick={()=>props.addToAnime(detailAnime)}className="bg-primary-red-color w-48 h-10 rounded-3xl mb-4 uppercase active:scale-95">Add to Animeshelf</button>
        <div className="w-full text-lg leading-9">
        <h1 className="text-2xl border-b-2 text-center">Information</h1>
        <h2 className="tracking-wider mt-2 ml-4 capitalize">Type: {detailAnime.media_type}</h2>
        <h2 className="tracking-wider ml-4">Episodes: {detailAnime.num_episodes}</h2>
        <h2 className="tracking-wider ml-4">Start Date: {detailAnime.start_date}</h2>
        <h2 className="tracking-wider ml-4">End Date: {detailAnime.end_date}</h2>
        <h2 className="tracking-wider ml-4 capitalize">Status: {detailAnime.status}</h2>
        <h2 className="tracking-wider ml-4 capitalize">Start Season: {detailAnime.start_season?.season} {detailAnime.start_season?.year} </h2>
        <div className="flex items-center tracking-wider">
            <h2 className="mr-2 ml-4">Genre: </h2>
            <div className="flex flex-wrap gap-2" >
              {genres.map((genresObject:any )=>(<p key={genresObject.id}className="bg-primary-red-color p-1 rounded-3xl">{genresObject.name}</p>))} 
            </div>
            </div>
        </div>
        </div>
        <div className="w-full flex flex-col ">
        <h1 className="uppercase text-3xl">{detailAnime.title}</h1>
        <h1 className="border-b-4 pb-4">{detailAnime.alternative_titles?.ja}</h1>
        <div className="flex gap-4 justify-between m-6 items-center">
            <div className="flex flex-col items-center">
                <h2 className="bg-primary-red-color p-1 rounded-2xl">score</h2>
            <h2>{detailAnime.mean}</h2>
            <h2>{detailAnime.num_scoring_users}</h2>
            </div>
        <h2>Ranked #{detailAnime.rank}</h2>
        <h2>Popularity #{detailAnime.popularity}</h2>
        </div>
        <h1 className="border-t-4 pt-4 text-xl">Synopsis</h1>
        <p className="text-justify border-b-2 pb-4">{detailAnime.synopsis}</p>
    <h1 className="pt-4 text-xl">Background</h1>
    <p className="text-justify pb-4">{detailAnime.background}</p>
</div>
<div className="col-span-2 sm:col-span-1 border-t-4 pt-4">
<h1 className="text-3xl mb-4">Recommandation</h1>
<div className="flex gap-6 w-full mb-6 justify-center flex-wrap">
{recommendations.map((recommendationsObject:any)=>(<Link to={`/anime/${recommendationsObject.node.id}`}><div key={recommendationsObject.node.id}className="flex flex-col shrink-0 items-center  justify-center w-72 h-80">
    <h1 className="text-xl h-8 overflow-hidden text-center">{recommendationsObject.node.title}</h1>
    <img  className="border-t-2 pt-2 h-72"src={recommendationsObject.node.main_picture?.medium}/>
</div></Link>))}
</div></div></div>)}
    </div>)
}
export default DetailAnime;