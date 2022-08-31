import React from "react";
function TopManga(){
    const [page, setPage]= React.useState<number>(10);
    const handleClickNext =()=>{
        setPage((page)=>page+10)
        console.log(page)
    }
     const handleClickPrevious =()=>{
        if (page > 10){
        setPage((page)=>page-10)
        console.log(page)}
        else{
            setPage(10)
        }
    }
    return(<div className="min-h-4">
        <div className="h-12 bg-primary-red-color mt-6" >
            <h1 className="text-primary-white-color uppercase font-semibold text-3xl pt-1 ml-3">Top {page} Mangas</h1>
        </div>
        <div className="flex gap-6">
        <button onClick={handleClickPrevious}className="bg-primary-red-color text-primary-white-color uppercase w-36 h-10 rounded-2xl mt-6 mb-6">previous</button>
        <button onClick={handleClickNext}className="bg-primary-red-color text-primary-white-color uppercase w-36 h-10 rounded-2xl mt-6 mb-6">next</button>
        </div>
    </div>)
}
export default TopManga;