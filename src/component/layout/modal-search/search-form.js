import { useRouter } from "next/router";
import { useState } from "react";

const SearchForm = ({openModal}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter()

  const handlerChange = (e) => {
     setSearchQuery(e.target.value)
  }
 
  const handlerSearchSubmit = (e) => {
     e.preventDefault()
 if (!searchQuery) {
     alert("Input search tidak boleh kosong")
     return
   }
   router.push(`/search?title=${searchQuery}`);
  
  }
  
    return (
  
        <div class="w-full">
          <label
    
            class="text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative" onClick={openModal}>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black dark:text-white">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <span  class="cursor-pointer dark:hover:bg-gray-700 w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none inline-block">
              Cari Anime..
            </span>
          </div>
        </div>
     );
}

export default SearchForm