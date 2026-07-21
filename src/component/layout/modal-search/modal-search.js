
import axios from "axios"
import { useState } from "react"
import * as cheerio from 'cheerio';
import SearchResultCard from "./search-result-card";
import Loader from "./loader";
// import SearchResultCard from "./search-result-card"

const ModalSearch = ({isOpen,openSearchModal}) => {
   const [searchValue,setSearchValue] = useState("")
   const [searchResult,setSearchResult] = useState([])
   const [isLoading,setIsLoading] = useState(true)

   const searchBlogPost = async (e) => {
    const {value} = e.target
    setSearchValue(value)
    const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
    const response = await axios.get(`${path}/api/v1/search-anime?title=${value}`);
    if (response.status === 200) {
         setSearchResult(response.data)
         setIsLoading(false)
    }else{
          console.log(response.message);
        setIsLoading(false)
    }
   }

   const clearSearchValue = (e) => {
    e.preventDefault()
    setSearchValue("")
   }

//    console.log(searchValue);
//    console.log(searchValue.length);
    return(
<div id="select-modal" tabindex="-1" aria-hidden="true" className={`fixed top-0 left-0 right-0 bottom-0 z-30 bg-black bg-opacity-75 transition duration-250 font-roboto ${isOpen ? '' : 'hidden'}`} onClick={openSearchModal}>
<div class="relative sm:p-4 p-2 w-full m-auto max-w-2xl max-h-full mt-28">
      
 <div class="relative bg-white rounded-lg shadow dark:bg-gray-900"  onClick={(e) => e.stopPropagation()}>
       
<header class="border-b rounded-t dark:border-gray-800">
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Cari Anime..." value={searchValue} required onChange={searchBlogPost}/>
         {searchValue.length < 1 ? "" :  <button type="button" class="absolute end-2.5 bottom-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto  dark:hover:bg-gray-600 dark:hover:text-white" onClick={clearSearchValue}>
        <i class="fa fa-times" aria-hidden="true"></i>
        </button>  }
    </div>
</form>
</header>

<div className={`p-5 md:py-7 min-h-[120px] w-full flex flex-col ${searchValue?.length < 1 ? "" : "h-[300px] overflow-y-scroll"}`}>
{searchValue.length < 1 ? <h3 className="sm:text-md text-sm tracking-wide leading-6 m-auto font-semibold text-gray-900 dark:text-white">
Mulailah mengetikkan judul untuk mencari anime yang diinginkan.</h3> 
: isLoading  ? <Loader /> : <SearchResultCard result={searchResult} title={searchValue} /> }

</div>        
     
</div>

        </div>

<button className="absolute text-slate-100 top-5 right-10 text-3xl"  onClick={openSearchModal}>
<i class="fa fa-times" aria-hidden="true"></i>
</button>
    </div> 
    )
}

export default ModalSearch