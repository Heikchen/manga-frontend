import React from "react"
function TopAnime(){
    const [page, setPage]= React.useState<number>(10);
    const [isDisabled, setIsDisabled]=React.useState<boolean>(true);
    const handleClickNext =()=>{
        setPage((page)=>page+10)
        setIsDisabled(false);
        console.log(page)
    }
     const handleClickPrevious =()=>{
        if (page > 10){
        setPage((page)=>page-10)
        console.log(page)
    if(page === 20){
        setIsDisabled(true)
    }}
    }
    return(<div className="min-h-4">
        <div className="bg-primary-red-color text-primary-white-color h-12 mt-6">
            <h1 className="font-semibold uppercase text-3xl pt-1 ml-3">Top {page} Animes</h1>
        </div>
        <div className="flex gap-6">
        <button onClick={handleClickPrevious}className="bg-primary-red-color text-primary-white-color uppercase w-36 h-10 rounded-2xl mt-6 mb-6 disabled:opacity-50" disabled={isDisabled}>Previous</button>
        <button onClick={handleClickNext}className="bg-primary-red-color text-primary-white-color uppercase w-36 h-10 rounded-2xl mt-6 mb-6">Next</button>
        </div>
    </div>)
}
export default TopAnime;