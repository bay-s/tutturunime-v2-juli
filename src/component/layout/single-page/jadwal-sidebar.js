import { useState } from "react"
import AnimeJadwal from "../post/anime-jadwal";

const JadwalSidebar = ({jadwal}) => {
    const days = new Date().getDay()
    const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const [selectDay,setSelectDay] = useState(day[days])
 
    const handlerSelectDay = (event) => {
      setSelectDay(event.target.value);
    };
    
   const keys = Object.keys(jadwal);
   const schedule = jadwal
 
    return(
<section className='grid grid-cols-1 gap-5 dark:bg-dark-gray dark:shadow shadow-lg bg-gray-100'>
<ul className='flex items-center justify-between p-2'>
<li >
<h3 className='rounded border-s-4 border-purple-500 p-2 font-bold  text-xl dark:text-gray-200 uppercase'>Jadwal</h3>
</li>
<li>
<select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectDay} onChange={handlerSelectDay}>
  {
  keys.map(day => {
    return <option value={day} data-day={day} key={day}>{day}</option>
  })
}
</select>

</li>
</ul>
{
keys.map((day, index) => {
      return <div className={selectDay === day ? "flex flex-col gap-5 fade-in transition-opacity duration-500 ease-in-out p-3" : "hidden w-0 h-0 invisible"} key={index}  >
{      
schedule[day].map(jadwal => {
  return <AnimeJadwal key={jadwal?.slug} anime={jadwal} day={day} activeTab={selectDay}/>
})
}
 </div> 

    })
}

 
</section> 
    )
}

export default JadwalSidebar

