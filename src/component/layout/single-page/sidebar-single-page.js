import { month } from "@/lib/month"
import GenreElement from "../post/genre-element";
import Image from "next/image";
 
const SidebarSinglePage = ({aniList,batch,type}) => {
    // const studio = aniList?.studios?.edges.find(studio => studio.isMain === true )
    // const filteredInfo = type === 'batch' ? "" : batch?.info.filter(item => !item.startsWith("Genre:") && !item.startsWith("Judul:") && !item.startsWith("Genres:"));
 console.log(aniList);
 
    return(
 <aside className="col-span-4 md:col-span-1 sm:px-2 flex flex-col items-start gap-2 order-last md:order-first">
  <figure className="rounded-md w-full self-start md:block hidden">
    <Image
      src={batch?.thumb}
      priority
      width={100}
      height={100}
      className="object-cover w-full h-80 rounded-md"
      alt={`Nonton anime ${batch.title} Subtitle indonesia.`}
      />
  </figure>

  <ul className="flex flex-col gap-2 dark:text-gray-100">
           <li className="text-xs tracking-wide   gap-2">
             <p>Japanese: {aniList?.title?.native}</p>
           </li>
           <li className="text-xs tracking-wide flex items-start gap-2">
             <p>Skor: {aniList?.meanScore / 10}</p>
           </li>
           <li className="text-xs tracking-wide flex items-start gap-2">
             <p>Producer:    {
               aniList?.studios?.edges.map(producer => {
                return !producer.isMain ?  <span className="tracking-wide px-1" key={producer.node.name}>{producer.node.name} ,</span> : ""
               })
             }</p>
        
           </li>
           <li className="text-xs tracking-wide flex items-start gap-2">
             <p>Tipe: {aniList?.format}</p>
           </li>
           <li className="text-xs tracking-wide flex items-start gap-2">
             <p> Status: {aniList?.status}</p>
           </li>
           <li className="text-xs tracking-wide flex items-start gap-2">
             <p>Total Episode: {aniList?.episodes}</p>
           </li>
           <li className="text-xs tracking-wide flex items-start gap-2">
             <p>Durasi: {aniList?.dration} {aniList?.format === 'TV' ? 'Min. per ep.' : "Min"}</p>
           </li>
           <li className="text-xs tracking-wide flex items-start gap-2">
             <p>Tanggal Rilis: {month[aniList?.startDate.month]} {aniList?.startDate?.day}, {aniList?.startDate?.year}</p>
           </li>
           <li className="text-xs tracking-wide flex items-start gap-2">
             <p>Studio: {aniList?.studios?.node?.name}</p>
           </li>     
         </ul>
 

       <GenreElement genre={batch.genre} />
       </aside>
    )
}

export default SidebarSinglePage