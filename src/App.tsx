import React from "react";
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
  const [visible, setVisible]=React.useState<boolean>(false)

React.useEffect(()=>{
  setVisible(false)
},[])

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
setVisible(!visible);
console.log(visible)
  }  



  return (<BrowserRouter>
  <div className='bg-primary-black-color'>
    <div className="w-4/5 m-auto bg-primary-black-color">
      <Navbar />
         <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top-mangas" element={<TopManga/>}/>
      <Route path="/top-animes" element={<TopAnime/>}/>
      <Route path="/mangashelf" element={<MangaShelf myMangas={myMangas}/>}/>
      <Route path="/animeshelf" element={<AnimeShelf/>}/>
      <Route path="/manga/:id" element={<DetailManga addToMangashelf={addToMangashelf} visible={visible}  handleReady={handleReady}/>}/>
      <Route path="/popup" element={<Popup handleReady={handleReady}/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/anime/:id" element={<DetailAnime/>}/>
       </Routes>
      <Footer />
     
    </div></div></BrowserRouter>

  );
}

export default App;
