import Image from "next/image"
import Link from "next/link"

const Recomendation = ({anime,currentTabs}) => {

    return(
  <div className={currentTabs === 0 ? "flex flex-col gap-4" : "hidden"}>
        <h3 className={currentTabs === 0 ? "font-bold" : "hidden"}>Recomendation</h3>
        <div className={currentTabs === 0 ? "grid grid-cols-2 gap-5" : "hidden"}>
          {
            anime?.recomendation.map(item => {
              return     <div className="flex items-center gap-2 rounded-sm bg-white shadow" key={item.title}>
              <Image
                src={item?.thumb}
               unoptimized
               width={100}
               height={100}
               alt="image"
               className="w-28 h-36 object-cover rounded-md"
                 />
             <Link href={item.slug} className="text-slate-800 text-xs ">
             {item?.title}
             </Link>
         </div>
            })
          }
        </div>
  </div>
    )
}

export default Recomendation