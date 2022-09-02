function Popup(){
    return(<div className="w-3/4 min-h-60 p-4 border-2 border-primary-red-color m-auto outline outline-2 outline-offset-4 outline-primary-red-color font-quicksand text-primary-white-color mb-24 mt-24">
        <h1 className="bg-primary-red-color h-8 pt-1 pl-2 mb-4">Volumes:</h1>
        <div className="flex flex-wrap gap-4">
            <button className="h-8 w-12 rounded-3xl bg-primary-red-color">1</button>
            <button className="h-8 w-12 rounded-3xl bg-primary-red-color">2</button>
        </div>
    </div>)
}
export default Popup;