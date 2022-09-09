import React from "react";
import {useLocation} from "react-router-dom";
function Popup(props:any){
    const [active, setActive]= React.useState<number[]>([]);
    const location = useLocation();
    let volumesAvailable:number[]=[];
    const volume:number=props.volume;
console.log(props.manga)
console.log(location.pathname)

for (let i=1; i<=volume; i++ ){
    volumesAvailable.push(i);}

 React.useEffect(()=>{
props.myMangas.map((myMangasObject:any)=>{
    
    if(myMangasObject.id === props.manga.id){
        
        console.log(myMangasObject)
        if(myMangasObject.volume.length >0){ 
        setActive(myMangasObject.volume);
        console.log(active)
    }
    }}
 )},[])   


    return(<div className={` min-w-fit min-h-fit p-4 border-2 border-primary-red-color m-auto outline outline-2 outline-offset-4 outline-primary-red-color font-quicksand text-primary-white-color  bg-primary-black-color mb-24 mt-24`}>
        <h1 className="  bg-primary-red-color h-8 pt-1 pl-2 mb-4">Volumes:</h1>
        <div className="  flex flex-wrap gap-4">
           {volumesAvailable.map((volumesObject:any)=>(<button style={{backgroundColor: active.find((id:any)=> id === volumesObject) === undefined ? "" : "var(--primary-red-color"}} onClick={(event)=>props.addVolumeToManga(volumesObject, props.manga, event)} key={`${volumesObject}`} data-key={`${volumesObject}`}className={`h-8 w-12 rounded-3xl active:scale-95 opacity-100`}>{volumesObject}</button>))} 
        </div>
        {location.pathname === "/mangashelf" ? null:(<button onClick={props.handleReady}  className="h-8 w-24 rounded-3xl bg-primary-red-color  mt-6 active:scale-95">Ready</button>)}
    </div>)
}
export default Popup;