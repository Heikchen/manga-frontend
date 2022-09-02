import axios from "axios";
import React from "react";
function BrowseManga(){
    const [mangasTop, setMangasTop]=React.useState<any>([])
    const fetchMangas = ():void => {
        axios.get('http://localhost:7020/manga/ranking?ranking_type=all&limit=10', {
            headers: {
                'x-mal-client-id': 'b67859a9dc4d5c8d747d16656e7d4f19'
            }
        })
        .then(response => setMangasTop(response.data.data))
    }
    React.useEffect(()=>{fetchMangas()},[])
return(
<div className="flex gap-4  w-full overflow-x-scroll ">
{mangasTop.map((mangasObject:any)=>(<img key ={mangasObject.node.id} className="h-72" src={mangasObject.node.main_picture.large}/>))}
    </div>)
}
export default BrowseManga;