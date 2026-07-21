import { createSlug } from "@/lib/create-slug";
import Link from "next/link";

const HomepageBanner = ({anime,animeLink}) => {

const img = '/img/banner.jpg'
const background = {
    backgroundImage: `url(${!anime?.bannerImage ? img : anime?.bannerImage})`
   } 
 
return(
 <section className="relative banner h-[350px] md:h-[400px] rounded-lg" style={background}>
 <div className="flex flex-col gap-3 w-auto sm:w-2/3 absolute bottom-5 sm:bottom-10 left-4 sm:left-7">
    <h2 className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words transition-all duration-200 hover:text-slate-200">
        <Link href={animeLink?.slug}>
        {anime?.title?.romaji}
        </Link>
    </h2>
    <ul className="flex items-center gap-4">
        <li><p className="whitespace-nowrap focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-xs sm:px-3 px-2 py-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{animeLink?.episode}</p></li>
        <li><p className="whitespace-nowrap font-bold text-white text-xs sm:text-sm">Status: {anime?.status}</p></li>
    </ul>
  <p className="text-xs text-white truncate text-ellipsis tracking-wide leading-6 w-52 sm:w-96">{anime?.description}</p>
<ul className="flex items-center gap-3 flex-wrap">
  {
anime?.genres.map(genre => {
               return <li key={genre.name}>
                    <Link href={`/genres/${createSlug(genre)}`}
  class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-xs sm:px-3 px-2 py-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
  data-ripple-light="true"
>
 {genre}
</Link>
               </li>
            })
        }
    </ul>
   </div>
  <div className="shadow-banner h-full w-full"></div>
 </section>
    )
}

export default HomepageBanner