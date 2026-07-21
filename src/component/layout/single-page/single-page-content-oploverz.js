import Link from "next/link";
 
const SinglePageContentOploverz = ({data}) => {
 
    return(
<div className="col-span-4 md:col-span-3 sm:px-2 order-first md:order-last">

<div className={`flex flex-col gap-3 col-span-4 md:col-span-3 sm:px-2 mb-5`}>
 <h1 className="font-bold text-lg md:text-2xl dark:text-white" itemProp="headline">Nonton Anime {data?.anime.originalTitle}</h1>
  {data?.anime?.sinopsis?.map(s => {
   return <p key={s} className="leading-6 tracking-wide text-xs dark:text-gray-100 dark:text-white"  >{s}</p>
  })}
  </div>
  <div className="overflow-y-scroll h-[450px]">
      <ul className="flex flex-col items-start gap-1 flex-wrap">
    {
            data?.anime?.linkEpisode?.map((eps) => {
                 const currentPage = eps?.slug.split("/")[1]
                 console.log(currentPage === data?.slug);
                return <li key={eps.name} className="px-4 py-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 w-full">
                 <Link
                   href={!eps?.slug ? "#" :  `/watch/${eps?.slug}`}
                   className={`flex items-start justify-between hover:text-sky-400 transition duration-150 ${currentPage === data?.slug ? "cursor-text" : ""}`}
           >
                  <div className="flex flex-col gap-1 items-start">
                   <span className={`${currentPage === data?.slug ? "text-red-500" : "text-cyan-500 hover:text-cyan-400"} text-md transition duration-150 font-semibold`}>Episode {eps?.eps}</span>
                   <span className="text-slate-300 text-xs transition duration-150 ">{eps?.date}</span>
                  </div>
                  <i class="fa fa-chevron-right  font-bold" aria-hidden="true"></i>
                 </Link>
     
               </li>
                })
          }
        </ul>
    </div>
    
</div>
    )
}

export default SinglePageContentOploverz




 