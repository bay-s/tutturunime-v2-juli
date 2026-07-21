import Link from "next/link"

const GenreElement = ({genre}) => {

    return(
 <ul className="flex items-center gap-2 flex-wrap">
        <li className="text-xs tracking-wide">
          <p className="text-xs dark:text-gray-100">Genre :</p> 
     </li>
        {
       genre.map(genre => {
            return <li className="text-xs tracking-wide" key={genre.name}>
              <Link href={`/${genre.slug}`} className="text-blue-500 hover:text-blue-700 dark:text-cyan-500 dark:hover:text-cyan-700  hover:underline">{genre.name}</Link>
            </li>
        })
        }
    </ul>
    )
}

export default GenreElement