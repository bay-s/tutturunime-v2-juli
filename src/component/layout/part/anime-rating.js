
const AnimeRating = ({anime}) => {

    return(
<div class={anime.rating === '' || !anime.rating ? "hidden" :"absolute left-0 group-hover:left-2 transition-left duration-150 top-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-xs px-4 py-1.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"}>
<i class="fa fa-star text-white px-2" aria-hidden="true"></i>
{anime.rating}
 </div>
    )
}

export default AnimeRating