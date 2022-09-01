function DetailManga(){
    return(<div className="font-quicksand h-fit w-full text-primary-white-color grid grid-rows-auto grid-cols-2 sm:grid-cols-1 gap-6 mt-6 mb-6">
        <div className="w-full flex flex-col items-center">
        <img className="w-90 rounded-2xl mb-6"src="https://api-cdn.myanimelist.net/images/manga/3/249658l.jpg" />
         <button className="bg-primary-red-color w-48 h-10 rounded-3xl mb-4 uppercase active:scale-95">Add to Mangashelf</button>
        <div className="w-full text-lg leading-9">
        <h1 className="text-2xl border-b-2 text-center">Information</h1>
        <h2 className="tracking-wider mt-2 ml-4">Type: Manga</h2>
        <h2 className="tracking-wider ml-4">Volumes: 72</h2>
        <h2 className="tracking-wider ml-4">Chapter: 700</h2>
        <h2 className="tracking-wider ml-4">Start Date: </h2>
        <h2 className="tracking-wider ml-4">End Date:</h2>
        <h2 className="tracking-wider ml-4">Status: finished</h2>
        <h2 className="tracking-wider ml-4">Author:</h2>
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
        <h1 className="uppercase text-3xl">Naruto</h1>
        <h1 className="border-b-4 pb-4">―ナルト―</h1>
        <div className="flex justify-between m-6 items-center">
            <div className="flex flex-col items-center">
                <h2 className="bg-primary-red-color p-1 rounded-2xl">score</h2>
            <h2>8.06</h2>
            <h2>253792</h2>
            </div>
        <h2>Ranked #596</h2>
        <h2>Popularity #8</h2>
        </div>
        <h1 className="border-t-4 pt-4 text-xl">Synopsis</h1>
        <p className="text-justify border-b-2 pb-4">Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no one takes him seriously. Since birth, Naruto has been shunned and ridiculed by his fellow villagers. But their contempt isn't because Naruto is loud-mouthed, mischievous, or because of his ineptitude in the ninja arts, but because there is a demon inside him. Prior to Naruto's birth, the powerful and deadly Nine-Tailed Fox attacked the village. In order to stop the rampage, the Fourth Hokage sacrificed his life to seal the demon inside the body of the newborn Naruto.\n\nAnd so when he is assigned to Team 7—along with his new teammates Sasuke Uchiha and Sakura Haruno, under the mentorship of veteran ninja Kakashi Hatake—Naruto is forced to work together with other people for the first time in his life. Through undergoing vigorous training and taking on challenging missions, Naruto must learn what it means to work in a team and carve his own route toward becoming a full-fledged ninja recognized by his village.</p>
    <h1 className="pt-4 text-xl">Background</h1>
    <p className="text-justify pb-4">Naruto has sold over 250 million copies worldwide as of 2020, making it the 4th highest grossing manga series of all time. It was nominated for the 19th Tezuka Osamu Cultural Prize in 2014, and in the same year Masashi Kishimoto was awarded Rookie of the Year in the media fine arts category by Japan's Agency for Cultural Affairs.\n\nNumerous databooks, artbooks, novels, and fanbooks on the series have been released. Eight summary volumes featuring unaltered color pages, larger dimensions, and exclusive interviews, covering the first part of the series were released between November 7, 2008 and April 10, 2009.\n\nThe series was published in English by VIZ Media under the Shonen Jump imprint from August 16, 2003 to October 6, 2015. In the last four months of 2007, the campaign titled \"Naruto Nation\" was launched, in which three volumes were published each month so that US releases would be closer to Japan's, the same practice was done in February through April of 2009 this time titled \"Generation Ninja.\" A 3-in-1 omnibus edition has also been released since May 3, 2011. A box set containing volumes 1-27 was released on August 6, 2008, another one containing volumes 28-48 on July 7, 2015, and the final box set with volumes 49-72 on January 5, 2016. It was also published in Brazilian Portuguese by Panini Comics/Planet Manga from May 2007 to June 2015, and again as Naruto Gold edition since July 2015.</p>
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
export default DetailManga;