
import Link from "next/link"

const HomepageTitle = ({title,path,link, children}) => {

    return(
  <div className="flex flex-col gap-5">
     <ul className='flex items-center justify-between '>
        <li className="py-2">
          <h3 className='rounded border-s-4 border-purple-500 p-2 font-bold sm:text-2xl dark:text-gray-200 uppercase'>{title}</h3>
          </li>
        <li className={title === "Ongoing Stream" ? "" : "hidden"}>
          <Link href={path} className='group focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-all duration-150'>
          <span className="group-hover:-translate-x-1.5  inline-block">View More</span>
          <span className='font-bold px-2 text-md text-md'>
          <i class="fa fa-long-arrow-right group-hover:translate-x-1.5" aria-hidden="true"></i>
          </span>
          </Link>
        </li>
      </ul>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 '>
        {children}
      </div>
  </div>     
    )
}

export default HomepageTitle