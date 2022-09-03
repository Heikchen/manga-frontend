import axios from "axios";
import React from "react";
function BrowseAnime(){
   const [AnimesTop, setAnimesTop]=React.useState<any>([])
    const fetchMangas = ():void => {
        axios.get('http://localhost:7020/anime/ranking?ranking_type=all&limit=10', {
            headers: {
                'x-mal-client-id': 'b67859a9dc4d5c8d747d16656e7d4f19'
            }
        })
        .then((response) => setAnimesTop(response.data.data))
    }
    React.useEffect(()=>{fetchMangas()},[])
return(
<div className="flex gap-4 h-80 items-center w-full overflow-x-scroll ">
{AnimesTop.map((animesObject:any)=>(<div className="group shrink-0 relative"><img key ={animesObject.node.id} className=" h-72 w-auto " src={animesObject.node.main_picture.large}/><h1 className="invisible group-hover:visible  absolute bottom-4 left-0 bg-primary-red-color w-full min-h-12 text-center flex items-center text-lg justify-center text-primary-white-color">{animesObject.node.title}</h1></div>))}
    </div>)
}
export default BrowseAnime;