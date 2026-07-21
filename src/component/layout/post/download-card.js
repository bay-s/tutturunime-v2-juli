import Link from "next/link"
import Keyword from "../detail/keyword";
import Alert from "../single-page/alert";

const DownloadCard = ({anime}) => {
    const downloadLink = anime?.linkDownload
    const keys = Object.keys(anime?.linkDownload);
 
    return(
<div className="flex flex-col gap-4 col-span-2">
 <h3 className="rounded border-s-4 border-purple-500 p-2 font-bold text-md leading-5 sm:text-xl dark:text-gray-100">Download {anime?.epsTitle}</h3>
 <ul className="flex flex-col gap-2 fade">
 {
  keys.map((quality, index) => {
    return   <div key={index} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-900 rounded-sm">
 <ul className="flex items-center gap-3 flex-wrap  px-2">
 <h4 className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold sm:text-sm text-xs rounded py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-24 px-2 whitespace-nowrap">{quality}</h4>
  {downloadLink[quality].map(link => (
 
    <Link href={`http://ouo.io/qs/UQjzrRB1?s=${link.url}`} key={link.linkTitle}  passHref legacyBehavior>
      <a target="_blank" className="text-blue-500 hover:underline hover:text-blue-600 sm:text-sm text-xs dark:text-cyan-500"  rel="noopener noreferrer">{link.linkTitle}</a>   
    </Link>
  ))}
</ul>

    </div>
  })
    }
</ul>

 
</div>
    )
}

export default DownloadCard