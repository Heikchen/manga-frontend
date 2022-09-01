function DetailAnime(){
    return(<div className="font-quicksand h-fit w-full text-primary-white-color grid grid-rows-auto grid-cols-2 sm:grid-cols-1 gap-6 mt-6 mb-6">
        <div className="w-full flex flex-col items-center">
        <img className="w-90 rounded-2xl mb-6"src="https://api-cdn.myanimelist.net/images/anime/5/18179l.jpg" />
        <button className="bg-primary-red-color w-48 h-10 rounded-3xl mb-4 uppercase active:scale-95">Add to Animeshelf</button>
        <div className="w-full text-lg leading-9">
        <h1 className="text-2xl border-b-2 text-center">Information</h1>
        <h2 className="tracking-wider mt-2 ml-4">Type: TV</h2>
        <h2 className="tracking-wider ml-4">Episodes: 175</h2>
        <h2 className="tracking-wider ml-4">Start Date: </h2>
        <h2 className="tracking-wider ml-4">End Date:</h2>
        <h2 className="tracking-wider ml-4">Status: finished_airing</h2>
        <h2 className="tracking-wider ml-4">Start Season: Fall 2009</h2>
        <div className="flex items-center tracking-wider">
            <h2 className="mr-2 ml-4">Genre:</h2>
            <div className="flex flex-wrap gap-2" >
                <p className="bg-primary-red-color p-1 rounded-3xl">Action</p>
                <p className="bg-primary-red-color p-1 rounded-3xl">Adventure</p>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full flex flex-col ">
        <h1 className="uppercase text-3xl">Fairy Tail</h1>
        <h1 className="border-b-4 pb-4">フェアリーテイル</h1>
        <div className="flex justify-between m-6 items-center">
            <div className="flex flex-col items-center">
                <h2 className="bg-primary-red-color p-1 rounded-2xl">score</h2>
            <h2>7.58</h2>
            <h2>947436</h2>
            </div>
        <h2>Ranked #1424</h2>
        <h2>Popularity #46</h2>
        </div>
        <h1 className="border-t-4 pt-4 text-xl">Synopsis</h1>
        <p className="text-justify border-b-2 pb-4">In the enchanted Kingdom of Fiore, the lively Lucy Heartfilia has one wish: to join the renowned Fairy Tail—one of the many magical wizard guilds scattered around the continent. Luckily, a chance encounter with Natsu Dragneel, the \"Salamander\" of Fairy Tail, whisks her into the legendary guild.\n\nFrom Natsu's rivalrous antics with ice wizard Gray Fullbuster to the frightening presence of the unmatched combat goddess Erza Scarlet, Fairy Tail's powerful mages have a slight penchant for trouble. Through all the lucrative odd jobs and adventures to save the world from destruction lies an absolute and unyielding trust stronger than family that has formed between each guild member.\n\nTeaming up with Natsu, Gray, and Erza, Lucy finds herself amidst the guild's most misfit wizards. But as they constantly stand in the eye of every danger, there is one name that never ceases to resurface: Zeref, the feared master of dark magic.\n\n[Written by MAL Rewrite]\n</p>
    <h1 className="pt-4 text-xl">Background</h1>
    <p className="text-justify pb-4">Fairy Tail won Animax Asia's Anime of the Year Award in 2010, and the Best Japanese Anime Award and Best French Dubbing Award at the 19th Anime & Manga Grand Prix in 2012.</p>
</div>
<div className="col-span-2 sm:col-span-1 border-t-4 pt-4">
<h1 className="text-3xl mb-4">Recommandation</h1>
<div className="flex gap-6 w-full justify-center flex-wrap">
<div className="flex flex-col items-center w-48">
    <h1 className="text-xl">One Piece</h1>
    <img  className="border-t-2 pt-2"src="https://api-cdn.myanimelist.net/images/manga/2/253146l.jpg"/>
</div>
<div className="flex flex-col items-center w-48">
    <h1 className="text-xl">One Piece</h1>
    <img  className="border-t-2 pt-2"src="https://api-cdn.myanimelist.net/images/manga/2/253146l.jpg"/>
</div>
</div></div>
    </div>)
}
export default DetailAnime;