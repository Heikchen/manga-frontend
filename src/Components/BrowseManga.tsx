import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";

function BrowseManga(){
    const [mangasTop, setMangasTop]=React.useState<any>([])
    const fetchMangas = ():void => {
        axios.get('http://localhost:7020/manga/ranking?ranking_type=all&limit=10', {
            headers: {
                'x-mal-client-id': 'b67859a9dc4d5c8d747d16656e7d4f19'
            }
        })
        .then((response) => setMangasTop(response.data.data))
    }
    React.useEffect(()=>{fetchMangas()},[])
return(
<div className="flex gap-4 h-80 items-center w-full overflow-x-scroll ">
{mangasTop.map((mangasObject:any)=>(<Link to={`/manga/${mangasObject.node.id}`}><div className=" flex justify-center group shrink-0 h-72 w-48 relative"><img key={mangasObject.node.id} className=" h-72 w-auto shrink-0 center" src={mangasObject.node.main_picture.large}/><h1 key={mangasObject.node.title} className="invisible group-hover:visible  absolute bottom-4 left-0 bg-primary-red-color w-full min-h-12 text-center flex items-center text-lg justify-center text-primary-white-color">{mangasObject.node.title}</h1></div></Link>))}
    </div>)
}
export default BrowseManga;