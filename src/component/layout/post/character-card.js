import Image from "next/image";

const CharacterCard = ({anime}) => {
    const chara =  anime?.characters?.edges 
 
    return(
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5"> 
<h3 className="mb-3 col-span-1 sm:col-span-2 rounded border-s-4 border-purple-500 p-2 font-bold text-md sm:text-xl dark:text-white">Characters</h3>
      {  chara?.map(char => {
            return <div className="fade flex items-start sm:items-center  justify-between rounded-md bg-white dark:bg-gray-900 shadow-md " key={char?.node?.id}>
 <div className="flex sm:flex-row flex-col items-start sm:items-center gap-2">
        <Image
          src={char?.node?.image?.medium}
         unoptimized
         width={100}
         height={100}
         alt="Character"
         className="w-28 h-44 sm:w-16 sm:h-20 sm:object-cover rounded-md"
           />
       <ul className="flex flex-col gap-1 sm:gap-2 text-xs p-2 dark:text-gray-100">
        <li><span className="truncate text-ellipsis w-20 sm:w-full inline-block ">  {char?.node?.name?.full}</span></li>
        <li><span className=" ">{char?.role}</span></li>
       </ul>
 </div>
     <div className={char?.voiceActors?.length < 1 ? "hidden" : "flex sm:flex-row flex-col items-center gap-2"}>
       <ul className="flex flex-col gap-1 sm:gap-2 text-xs p-0 sm:p-2 order-1 sm:order-1 dark:text-gray-100">
        <li><span className="truncate text-ellipsis"> {char?.voiceActors[0]?.name?.full}</span></li>
        <li><span> {char?.voiceActors[0]?.languageV2}</span></li>
       </ul>
       <Image
          src={char?.voiceActors[0]?.image?.medium}
         unoptimized
         width={100}
         height={100}
         alt="Seiyu"
         className="w-28 h-44  sm:w-16 sm:h-20 sm:object-cover  rounded-md sm:order-2"
           />
       </div>
  </div>
         })}
</div>
    )
}

export default CharacterCard