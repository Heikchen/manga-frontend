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



function App() {
  return (<BrowserRouter>
  <div className='bg-primary-black-color'>
    <div className="w-4/5 m-auto bg-primary-black-color">
      <Navbar/>
         <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top-mangas" element={<TopManga/>}/>
      <Route path="/top-animes" element={<TopAnime/>}/>
      <Route path="/mangashelf" element={<MangaShelf/>}/>
      <Route path="/animeshelf" element={<AnimeShelf/>}/>
      <Route path="/manga" element={<DetailManga/>}/>
      <Route path="/popup" element={<Popup/>}/>
      <Route path="/anime/:id" element={<DetailAnime/>}/>
       </Routes>
      <Footer />
     
    </div></div></BrowserRouter>

  );
}

export default App;
