
const AnimeTag = ({anime,type}) => {
    let status;
    if(type.toLowerCase() === "bd" ){
      status = type
    }else if(type.toLowerCase() === "ongoing" || "tv"){
      status = anime.episode
    }else status = anime?.status
   
      return(   
  <div class="group-hover:brightness-50 absolute left-0 group-hover:left-2 transition-left duration-150 top-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-xs px-3 sm:px-4 py-1 sm:py-1.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
  <i class={type !== 'ongoing' ? "fa fa-star text-white px-2" : 'hidden'} aria-hidden="true"></i>
   {status}
   </div>
      )
  }
  
  export default AnimeTag