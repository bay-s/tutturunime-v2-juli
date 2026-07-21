import { ValueContext } from "@/pages/value-context"
import Link from "next/link"
import { useContext } from "react"

const GenreLists = () => {
  const {genre}  = useContext(ValueContext)
 
    return(
<div className="flex flex-col gap-6 px-2 border-b dark:border-slate-700 pb-4">
  <h4 className="font-bold dark:text-white">
     Genre
  </h4>
<ul className="flex items-center gap-4 flex-wrap">
       {
        genre?.map(item => {
         return <li key={item.name}>
            <Link href={item.slug}   className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-xs px-2 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{item.name}</Link>
          </li>
        })
       }
     </ul>
</div>
    )
}

export default GenreLists