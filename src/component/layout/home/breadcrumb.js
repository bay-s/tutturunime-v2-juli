import Link from "next/link"

const Breadcrumb = ({currentPage}) => {

    return(
<nav aria-label="Breadcrumb" className="flex">
  <ol
    className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-200 w-full dark:bg-gray-900 bg-white"
  >
    <li className="flex items-center ">
      <Link
        href="/"
        className="flex h-14 sm:h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900 dark:bg-gray-800 dark:hover:text-white"
      >
      <i class="fa fa-home" aria-hidden="true"></i>
        <span className="ms-1.5 text-xs font-medium"> Home </span>
      </Link>
    </li>

    <li className="relative flex items-center">
      <span
        className="absolute  inset-y-0 -start-px h-14 sm:h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 dark:bg-gray-800"
      >
      </span>

      <h1
       type="button"
        className="cursor-text flex h-14 sm:h-10 items-center  pe-4 ps-8 text-xs sm:text-md font-bold transition hover:text-gray-900   dark:hover:text-white "
      >
        {currentPage}
      </h1>
    </li>
  </ol>
</nav>
    )
}

export default Breadcrumb