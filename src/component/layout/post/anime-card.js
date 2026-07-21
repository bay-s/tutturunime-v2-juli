import Image from "next/image"
import Link from "next/link"
import Overlay from "../part/overlay"
import PostImage from "../part/post-image"
import AnimeTag from "../part/anime-tag"

const AnimeCard = ({anime,type,slugType}) => {
 
    return(
<article className="block rounded-lg group relative"  key={anime.title} >
<Link href={`${slugType === "oploverz" ? "/watch" : ""}/${anime.slug}`} className="w-full sm:h-64 md:h-72 lg:h-60 block overflow-hidden rounded-lg relative group"> 
<PostImage anime={anime} />
<AnimeTag anime={anime} type={type} />
<Overlay />
</Link>

 <h2 className="font-bold py-2 text-sm dark:text-gray-200 group-hover:text-gray-400 transition duration-150">
    <Link href={`${slugType === "oploverz" ? "/watch" : ""}/${anime.slug}`}>
        {anime.title}
    </Link>
 </h2>
 
</article>
    )
}

export default AnimeCard