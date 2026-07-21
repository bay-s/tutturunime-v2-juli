import Link from "next/link";
import GenreLists from "../post/genre-lists";
 
const SidebarHidden = ({sidebarOpen,openSidebar}) => {
 
    return(
 <section  tabIndex="-1" aria-hidden="true" className={sidebarOpen ? 'fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-75  transition duration-250 font-roboto ' : 'hidden'} onClick={openSidebar} > 
     <aside  className={`w-[250px] z-100 transition-transform duration-300 ease-in-out  fixed top-0 left-0 flex h-screen flex-col justify-between bg-white dark:bg-dark-gray ${sidebarOpen ? 'translate-x-0' : 'translate-x-[-250px]'} `}>
        <div id="sidebar"  class="flex flex-col gap-8 py-5 overflow-y-scroll"  >
           <Link href="/" className="font-bold dark:text-white dark:hover:text-gray-300">
           <i class="fa fa-home px-3" aria-hidden="true"></i>
               Home
           </Link>
           <GenreLists />
           <ul className="flex flex-col gap-3">
           <li className="border-b dark:border-gray-800 pb-4 group cursor-pointer px-3">
             <Link href="/privacy-policy" className="font-bold dark:text-gray-300 dark:group-hover:text-white group-hover:text-gray-700">
              Privacy Policy
           </Link>
             </li>
             <li className="border-b dark:border-gray-800 pb-4 group cursor-pointer px-3">
             <Link href="/ongoing" className="font-bold dark:text-gray-300 dark:group-hover:text-white group-hover:text-gray-700">
               Ongoing
           </Link>
             </li>
             <li className="border-b dark:border-gray-800 pb-4 group cursor-pointer px-3">
             <Link href="/completed" className="font-bold dark:text-gray-300 dark:group-hover:text-white group-hover:text-gray-700">
               Completed
             </Link>
             </li>
           </ul>
        </div>
   </aside>
<button className="absolute text-slate-100 top-5 right-10 text-3xl"  onClick={openSidebar}>
<i class="fa fa-times" aria-hidden="true"></i>
</button>
</section>
    )
}

export default SidebarHidden