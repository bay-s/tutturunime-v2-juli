
import Image from "next/image"
import AnimeJadwalLoader from "../post/anime-jadwal-loader"
import GenreElement from "../post/genre-element";
import Link from "next/link";

const AnimeSearchResult = ({anime,result}) => {
    const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH;
    return(
       result.length < 1 ? <AnimeJadwalLoader />
        : <div className="fade flex items-center w-full gap-2 group border-b border-slate-200 pb-3 dark:border-slate-700" key={anime?.title}>
        
         <figure className= "w-20 h-28 rounded-md " >
        <Image
         src={anime?.thumb}
         loading="lazy"
         placeholder="blur"
         blurDataURL={`/_next/image?url=${anime?.thumb}&w=16&q=1`}
         width={100}
         height={100}
         className="object-cover w-full h-full rounded-md"
         alt={anime?.title}
        />
        </figure>
        <div className=" flex flex-col gap-1 p-1 w-4/6">
        <h3 className="text-sm font-bold dark:text-gray-100 dark:group-hover:text-gray-400 group-hover:text-gray-600">
        {/* <Link href={`/${anime?.slug}`}>{anime?.title}</Link> */}
        <a href={`${path}${anime?.slug}`}>{anime?.title}</a>
        </h3>
        </div>
       
        </div>
    )
}

export default AnimeSearchResult