import React from "react";
import axios from "axios";
import { useLocation , Link} from "react-router-dom";
import Spinner from "./Spinner";
import Search from "./Search";

function SearchPage(){
const [result, setResult] = React.useState<any>([]);
const [source, setSource]= React.useState<string>("anime");
const [page, setPage]= React.useState<number>(10);
const [offset, setOffset]=React.useState<number>(0);
const [isLoading, setLoading]=React.useState<boolean>(false)
const [isDisabled, setIsDisabled]=React.useState<boolean>(true);
const location:any = useLocation();

React.useEffect(() => {
    fetchSearch(offset);
  }, [offset]);

  React.useEffect(() => {
    setIsDisabled(true);
    setOffset(0);
    setPage(10);
    fetchSearch(0);
  }, [location, source]);

     const handleClickNext =():void=>{
        setPage((page)=>page+10)
        setOffset((offset)=>offset+10)
        setIsDisabled(false);
        console.log(page)
    }
     const handleClickPrevious =():void=>{
        if (page > 10){
        setPage((page)=>page-10)
      setOffset((offset)=>offset-10)
        console.log(page)
    if(page === 20){
       setIsDisabled(true); 
    }}

    }
    const handleSourceChange =(event:any):void=>{
        setIsDisabled(true)
        setOffset(0)
        setPage(10)
        setSource(event.target.value) 
        console.log(source)
    }
const fetchSearch = (offsetsearch:number) => {
    setLoading(true);
    axios
      .get(
        `http://localhost:7020/${source}?q=${location.state.search}&offset=${offsetsearch}`,{headers: {
                'x-mal-client-id': 'b67859a9dc4d5c8d747d16656e7d4f19'
            }}
      )
      .then((response) => {
        setResult(response.data.data)
        console.log(response.data);
        setLoading(false)
      });
  };
 
    return(<div>
      <div className="mt-6">
<Search />
</div>
<div><select
        className="h-12 w-48 text-primary-black-color focus:outline-primary-red-color  pl-4"
        value={source}
        onChange= {handleSourceChange}
        name="selectElement"
      >
        <option value="anime">Anime</option>
        <option value="manga">Manga</option>
       
          </select>
        </div>
        <div className="flex gap-4 w-full flex-wrap justify-center mt-6 mb-6">
{isLoading ? (<Spinner/>):(result.map((resultObject:any)=>(<Link to ={`/${source}/${resultObject.node.id}`}><div key={resultObject.node.id} className="group w-48 relative h-72 shrink-0"><img className="h-72 m-auto" src={resultObject.node.main_picture.medium}/><h1 className="invisible group-hover:visible absolute bottom-6 w-full text-primary-white-color flex items-center justify-center min-h-12 text-2xl bg-primary-red-color text-center">{resultObject.node.title}</h1></div></Link>)))}  
        </div>
<div className="flex gap-6">
        <button onClick={handleClickPrevious}className="bg-primary-red-color text-primary-white-color uppercase w-36 h-10 rounded-2xl mt-6 mb-6 disabled:opacity-50 active:enabled:scale-95" disabled={isDisabled}>previous</button>
        <button onClick={handleClickNext}className="bg-primary-red-color text-primary-white-color uppercase w-36 h-10 rounded-2xl mt-6 mb-6 active:enabled:scale-95">next</button>
        </div>
    </div>)
}

export default SearchPage;