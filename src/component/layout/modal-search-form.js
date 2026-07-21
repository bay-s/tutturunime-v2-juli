import { useRouter } from "next/router"
import { useState } from "react"

const ModalSearchForm = ({open, openModal ,setOpen}) => {
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
  setOpen(!open)
 }
 
    return(
<section id="defaultModal" tabIndex="-1" aria-hidden="true" className={open ? 'fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-75  transition duration-250 font-roboto ' : 'hidden'}>
{/*  
 <div className="w-full h-full flex items-center justify-center relative">

 
 <form className="flex flex-col gap-6 w-11/12 md:w-3/4 lg:w-1/2 " onSubmit={handlerSearchSubmit}>
  <h3 className="font-bold text-lg md:text-2xl text-slate-300 text-center">Start typing and press enter to search</h3>

<div class="relative border-b-2 border-slate-300 pb-2 cursor-text">
<input type="text" placeholder="Search Anime" className="text-white font-bold h-full w-full py-2 border-0 bg-transparent focus:outline-none"  onChange={handlerChange}/>
<button   type="submit" className="text-xl hover:text-white">
<i class="fa fa-search absolute top-2 right-0 text-gray-400" aria-hidden="true"></i>
</button>
</div>

</form>
   
 
<button className="absolute text-slate-100 top-5 right-10 text-3xl"  onClick={openModal}>
<i class="fa fa-times" aria-hidden="true"></i>
</button>

 </div> */}

</section>

    )
}

export default ModalSearchForm