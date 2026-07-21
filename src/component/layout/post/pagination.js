import Link from "next/link"

 
const Pagination  = ({pagination,value}) => {
  const active = 'cursor-text font-bold bg-blue-500 text-white border border-gray-300    dark:border-gray-700 dark:bg-blue-500 dark:text-white'
     const normal = ' hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'

    const nextUrl = `${value.path}/${parseInt(pagination?.nextUrl)}`
    const prevUrl = `${value.path}/${parseInt(pagination?.prevUrl)}`
    return(
  <nav aria-label="Page navigation">
  <ul class="inline-flex -space-x-px text-xs sm:text-sm flex-wrap">
    <li>
      {
        !pagination?.prevUrl ? <button className="flex items-center justify-center h-8 px-3 sm:h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  disabled:cursor-not-allowed disabled:opacity-50" disabled={!pagination?.page}>
           Previous
        </button>
        :    <Link href={value.type === 'genre' ? `/${pagination?.prevUrl}` : prevUrl}class="flex items-center justify-center h-8 px-4 sm:h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
      }
      
    </li>
     {
        pagination?.pageNumber?.map(page => {
 
            return   <li key={page}>
          {  value.page === page  ? (
            <button type="button" className={`flex items-center justify-center h-8 px-4 sm:h-10 ml-0  leading-tight  border border-gray-300 ${active}`}>{page}</button>
          )
            : (
                <Link  href={`${value.path}/${parseInt(page)}`} className={`flex items-center justify-center h-8 px-4 sm:h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 ${normal}`}>{page}</Link>
            )
        }
      </li>
        })
     } 
    <li>
  {
       pagination?.nextUrl ? (
        <Link
          href={value.type === 'genre' ? `/${pagination?.nextUrl}` : nextUrl}
          className="flex items-center justify-center px-3 h-8 sm:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </Link>
      ) : (
        <button
          className="flex items-center justify-center px-3 h-8 sm:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!pagination?.page}
        >
         Mext
        </button>
      )
  }
    </li>
  </ul>
</nav>
    )
}

export default Pagination 
