function Popup(props:any){
    let volumesAvailable:number[]=[];
    const volume:number=props.volume;

for (let i=1; i<=volume; i++ ){
    volumesAvailable.push(i)
    console.log(volumesAvailable)
}
    return(<div className={` w-3/4 h-fit p-4 border-2 border-primary-red-color m-auto outline outline-2 outline-offset-4 outline-primary-red-color font-quicksand text-primary-white-color  bg-primary-black-color mb-24 mt-24`}>
        <h1 className="  bg-primary-red-color h-8 pt-1 pl-2 mb-4">Volumes:</h1>
        <div className="  flex flex-wrap gap-4">
           {volumesAvailable.map((volumesObject:number)=>(<button className=" h-8 w-12 rounded-3xl bg-primary-red-color active:scale-95">{volumesObject}</button>))} 
        </div>
        <button onClick={props.handleReady}className="h-8 w-24 rounded-3xl bg-primary-red-color mt-6 active:scale-95">Ready</button>
    </div>)
}
export default Popup;