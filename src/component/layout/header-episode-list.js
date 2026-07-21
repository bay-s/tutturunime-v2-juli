import Image from "next/image"
import EpisodeList from "./episode-list"
import EpisodeListOploverz from "./episode-list-oploverz"

const HeaderEpisodeList = ({episode,query,type}) => {

return(
    <div className="flex flex-col gap-4">
    <header className="flex items-center gap-4 bg-gray-800 rounded-lg text-sm px-2 sm:px-5 py-0 sm:py-2.5 dark:bg-gray-800  ">
      <Image
       unoptimized
       width={100}
       height={100}
       src="/img/mayuri.png"
       className="object-contain w-20 h-16"
       alt="thumbnail"
      />
      <h3 className="font-bold text-white text-lg">Episode List</h3>
    </header>
   {type === "stream" ? <EpisodeList episodeList={episode} slug={query} /> : <EpisodeListOploverz episodeList={episode} slug={query}/> }  
   </div>
)
}

export default HeaderEpisodeList