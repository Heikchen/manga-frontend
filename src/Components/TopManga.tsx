function TopManga(){
    return(<div className="min-h-4">
        <div className="h-12 bg-primary-red-color mt-6" >
            <h1 className="text-primary-white-color uppercase font-semibold text-3xl pt-1 ml-3">Top 10 Mangas</h1>
        </div>
        <div>
        <button className="bg-primary-red-color text-primary-white-color uppercase w-36 h-10 rounded-2xl">previous</button>
        <button>next</button>
        </div>
    </div>)
}
export default TopManga;