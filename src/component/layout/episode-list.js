import Link from "next/link"
import { useEffect } from "react"

const EpisodeList = ({episodeList,slug}) => {
 
   const active = "flex flex-col gap-1 text-red-500 w-full dark:text-red-500 bg-gray-800 font-medium rounded sm:rounded-lg text-xs sm:text-sm cursor-text  px-3 sm:px-5 py-1 sm:py-2 "
   const normal = "flex flex-col gap-1 text-white w-full bg-gray-800 font-medium rounded sm:round text-xs sm:text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  px-3 sm:px-5 py-1 sm:py-2 "
    return(
 <div className="overflow-y-scroll h-[180px]">
  <ul className="flex items-center gap-2 flex-wrap ">
{
        episodeList?.map((eps) => {
             const currentPage = eps.slug.split("/")[0]
 
            return <li key={eps.eps} className={currentPage === slug  ? active : normal}>
             <Link
               href={!eps?.slug ? "#" :  `/${eps?.slug}`}
               className={currentPage === slug ? "cursor-text" : ""}
             >
              {eps.eps}
             </Link>
             <p className="text-gray-400 text-xs">{eps?.date}</p>
           </li>
            })
      }
    </ul>
</div>
    )
}

export default EpisodeList