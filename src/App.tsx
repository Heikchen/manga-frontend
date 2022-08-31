import React from "react";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TopManga from "./Components/TopManga";
import TopAnime from "./Components/TopAnime";
import DetailManga from "./Components/DetailManga";



function App() {
  return (<BrowserRouter>
  <div className='bg-primary-black-color'>
    <div className="w-4/5 m-auto bg-primary-black-color">
      <Navbar/>
         <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top-mangas" element={<TopManga/>}/>
      <Route path="/top-animes" element={<TopAnime/>}/>
      <Route path="/manga" element={<DetailManga/>}/>
       </Routes>
      <Footer />
     
    </div></div></BrowserRouter>

  );
}

export default App;
