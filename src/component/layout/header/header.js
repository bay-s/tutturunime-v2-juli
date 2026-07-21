import Image from "next/image";
import Link from "next/link";
// import DarkModeToggle from "./dark-mode-toggle";
import DarkModeToggle from "./dark-mode-toggle";
import SearchForm from "../modal-search/search-form";

const Header = ({openModal,openSidebar}) => {
    const logo = "/img/logo2.png"
 
    return(
 <header class="dark:shadow-lg dark:bg-gray-900 font-mono sticky top-0 z-30  bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90  shadow dark:bg-black">
        <div class="mx-auto px-0 md:px-6 max-w-auto lg:max-w-[1280px] atau xl:max-w-[1366px] mx-auto">
         <div class="flex items-center justify-between px-2 py-5">
     <ul className="flex items-center gap-4">
     {/* <button
         class="py-1.5 font-bold px-3 text-md sm:text-xl text-slate-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-2" onClick={openSidebar}>
       <i class={`fa fa-bars`} aria-hidden="true"></i>
     </button> */}
       <h1 title="TutturuNime Nonton anime subtitle indonesia">
       <Link class="block mt-1" href="/">
                   <Image
                   width={100}
                   height={100}
                   className="h-10 w-32 sm:w-44 object-contain"
                     unoptimized
                   src={logo}
                   alt="TutturuNime Nonton anime subtitle indonesia Logo"
                   />
        </Link>  
       </h1>
     </ul>  
 
      <ul className="flex items-center gap-2 sm:gap-5 ">   
        <li className="md:w-96 w-72 sm:block hidden ">
        <SearchForm  openModal={openModal} />
        </li>
       <button
         class="py-1.5 sm:hidden block font-bold px-3 text-md sm:text-xl text-slate-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={openModal}>
       <i className="fa fa-search" aria-hidden="true"></i>
       </button>
      <DarkModeToggle />
      </ul>
 
         </div>
 </div>
 
</header>       
    )
}

export default Header