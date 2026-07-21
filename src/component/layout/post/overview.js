import Image from "next/image"
import GenreElement from "./genre-element";
import { month } from "@/lib/month";

const OverView = ({episode,aniList}) => {
    // const filteredInfo =  episode?.info.filter(item => !item.startsWith("Genre:") && !item.startsWith("Judul:") && !item.startsWith("Genres:"));
 console.log(episode);
 console.log(aniList);
    return(
  // <div className='flex gap-2 items-start sm:flex-row flex-col'>
  <div className='grid grid-cols-4 items-start dark:shadow gap-8 justify-center'>
     
    <figure className="rounded-md col-span-3 sm:col-span-2 md:col-span-1 ">
    <Image
        src={aniList?.coverImage?.large ?? episode?.thumb}
        unoptimized
        width={100}
        height={100}
        alt="thumbnal"
        className="w-full h-full md:object-cover object-contain  rounded "
        />
    </figure>
    <div className="flex flex-col gap-3 col-span-4 md:col-span-3 sm:px-2">
         <h3 className="font-bold dark:text-white">{episode?.subHeading}</h3>
          
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
          <GenreElement genre={episode?.genre} />
       </ul>
         <p className="font-bold dark:text-white">Sinopsis</p>
         {
          episode?.sinopsis?.length < 1 ?  <p className="leading-6 tracking-wide text-xs dark:text-gray-100"  dangerouslySetInnerHTML={{__html: aniList?.description}} /> :   
          <p className="leading- tracking-wide text-xs dark:text-gray-100" key={episode?.sinopsis}>{episode?.sinopsis}</p>
         }
        
       </div>
         </div>
    )
}

export default OverView