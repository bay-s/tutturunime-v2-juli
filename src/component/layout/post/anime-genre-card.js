import Link from "next/link"
import PostImage from "../part/post-image"
import Overlay from "../part/overlay"
import AnimeRating from "../part/anime-rating"

const AnimeGenreCard = ({anime}) => {
 
    return(
<article className="block rounded-lg group"  key={anime.title} >
<Link href={`/${anime.slug}`} className="w-full sm:h-64 md:h-72 lg:h-60 block overflow-hidden rounded-lg relative group"> 
<PostImage anime={anime} />
<AnimeRating anime={anime} />
<Overlay />
</Link>

<div className="flex flex-col gap-2 px-3 py-2 ">
<h3 className="font-bold text-sm dark:text-gray-200 group-hover:text-gray-700 dark:group-hover:text-gray-400 transition duration-150">
    <Link href={`/${anime.slug}`}>
        {anime.title}
    </Link>
 </h3>
</div>

</article>
    )
}

export default AnimeGenreCard

    {/* <Link href={`/${anime.slug}`} className="w-full sm:h-64 md:h-72 lg:h-60 block overflow-hidden relative group"> 
<Image
            alt="thumbnail"
            src={anime.thumbnail}
            loader={() => anime.thumbnail}
            width={100}
            height={100}
            className="h-full w-full rounded-md object-cover transition-all transition-all w-full hover:scale-105"
/>
 
<div class={anime.rating === '' || !anime.rating ? "hidden" :"absolute left-0 group-hover:left-2 transition-left duration-150 top-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-xs px-4 py-1.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"}>
<i class="fa fa-star text-white px-2" aria-hidden="true"></i>
{anime.rating}
 </div>

</Link> */}
{/* <ul className="flex items-center gap-2 flex-wrap">
  {
    anime.genre.map(genre => {
        return <li key={genre.name}>
            <Link href={genre.slug} className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-1 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100 hover:underline font-bold">{genre.name}</Link>
        </li>
    })
  }    
</ul> */}