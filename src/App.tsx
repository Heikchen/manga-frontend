import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import TopManga from "./Components/TopManga";
import TopAnime from "./Components/TopAnime";
import DetailManga from "./Components/DetailManga";
import DetailAnime from "./Components/DetailAnime";
import MangaShelf from "./Components/MangaShelf";
import AnimeShelf from "./Components/AnimeShelf";
import Popup from "./Components/Popup";
import SearchPage from "./Components/SearchPage";



function App() {
  const [myMangas, setMyMangas]=React.useState<any>([]);
  const [visible, setVisible]=React.useState<boolean>(false);
 

const addToMangashelf=(mangaToAdd:any):void=>{
const doesMangaExistInShelf:any = myMangas.find(
      (mangas:any) => mangas.id === mangaToAdd.id
    );
    if(!doesMangaExistInShelf){
      setMyMangas([...myMangas,{...mangaToAdd, volume:[]}])
      console.log(myMangas)
      setVisible(true);
      
    }else{ setVisible(true);}
  }

const handleReady =():void=>{
setVisible(false);
  }  


const addVolumeToManga =(volumes:number, mangaVolume:any, event:any):any=>{
  const newVolume = myMangas.map((manga:any)=>{
    const findManga:any = manga.volume;
    console.log(findManga)
   if(manga.id === mangaVolume.id ){
      console.log(manga)
      const doesVolumeExistInShelf:any = findManga.find(
      (mangas:any) => mangas === volumes
    );
        console.log(doesVolumeExistInShelf)
    if(doesVolumeExistInShelf === undefined){
        manga.volume.push(volumes);
     event.target.setAttribute("style","background-color: var(--primary-red-color)" );  
      return{...manga}
  } else{
    const remove = findManga.filter((item:any)=>item !== doesVolumeExistInShelf );
    event.target.setAttribute("style","background-color: var(--primary-black-color)" );
    manga.volume = remove;
  return{...manga}}
  setMyMangas(newVolume);
console.log(newVolume);}
})


}
  return (<BrowserRouter>
  <div className='bg-primary-black-color'>
    <div className="w-4/5 m-auto bg-primary-black-color">
      <Navbar />
         <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top-mangas" element={<TopManga/>}/>
      <Route path="/top-animes" element={<TopAnime/>}/>
      <Route path="/mangashelf" element={<MangaShelf myMangas={myMangas} visible={visible} addVolumeToManga={addVolumeToManga} handleReady={handleReady}/>}/>
      <Route path="/animeshelf" element={<AnimeShelf/>}/>
      <Route path="/manga/:id" element={<DetailManga addToMangashelf={addToMangashelf} visible={visible} addVolumeToManga={addVolumeToManga} handleReady={handleReady} myMangas={myMangas}/>}/>
      <Route path="/popup" element={<Popup />}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/anime/:id" element={<DetailAnime/>}/>
       </Routes>
      <Footer />
     
    </div></div></BrowserRouter>

  );
}

export default App;
