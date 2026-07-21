import Link from "next/link"
import { useEffect } from "react"

const EpisodeListOploverz = ({episodeList,slug,type}) => {
 
    return(
 <div className="overflow-y-scroll h-60">
  <ul className="flex flex-col items-start gap-4 flex-wrap">
{
        episodeList?.map((eps) => {
             const currentPage =  eps?.slug.split("/")[1]
    
            return <li key={eps.slug} className="px-4 py-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 w-full">
             <Link
               href={!eps?.slug ? "#" :  `/${type === "oploverz" ? eps?.slug : `watch/`+eps?.slug}`}
               className={`flex items-start justify-between hover:text-sky-400 transition duration-150 ${currentPage === slug ? "cursor-text" : ""}`}
       >
              <div className="flex flex-col gap-1 items-start">
               <span className={`${currentPage === slug ? "text-red-500" : "text-cyan-500 hover:text-cyan-400"} text-md transition duration-150 font-semibold`}>{type === "oploverz" ? "Episode" : ""} {eps?.title}</span>
               <span className="text-slate-300 text-xs transition duration-150 ">{eps?.date}</span>
              </div>
              <i class="fa fa-chevron-right  font-bold" aria-hidden="true"></i>
             </Link>
 
           </li>
            })
      }
    </ul>
</div>
    )
}

export default EpisodeListOploverz

 