
const Keyword = ({anime}) => {

return(
<div className="flex flex-col gap-2 my-3">
<ul className="flex items-center gap-4">
    <li className="dark:text-slate-100 text-lg">
    <i class="fa fa-key" aria-hidden="true"></i>
    </li>
    <li><h3 className="font-bold dark:text-slate-100">Keyword</h3></li>
 </ul>
<div className="h-16 overflow-y-scroll rounded border-s-4 border-purple-500 p-2" id="keyword">
  <p className="dark:text-slate-100 sm:text-sm text-xs font-roboto   px-2  leading-6 tracking-wide">
{anime?.title}, Download {anime?.originalTitle}, Download Anime {anime?.originalTitle}, Nonton Anime {anime?.title}, Streaming Anime {anime?.originalTitle}, 
Download {anime?.originalTitle} Mobile MP4 Dan MKV .
  </p>
</div>
</div>
)
}

export default Keyword