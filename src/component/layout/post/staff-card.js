import Image from "next/image";

const StaffCard = ({anime}) => {
    const chara =  anime?.staff?.edges 
    const noImg = '/img/default.jpg'
 
    return(
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"> 
 <h3 className="dark:text-white mb-3 col-span-1 sm:col-span-2 rounded border-s-4 border-purple-500 p-2 font-bold text-md sm:text-xl  ">Staff</h3>
        {chara?.map(staff => {
            return <div className="fade flex items-center justify-between rounded-md bg-white shadow-md  dark:bg-gray-900" key={staff?.id}>
 <div className="flex items-center gap-2">
        <Image
          src={!staff?.node?.image ? noImg : staff?.node?.image?.medium}
         unoptimized
         width={100}
         height={100}
         className="w-16 h-20 object-cover rounded-md"
         alt= {staff?.node?.name?.full}
         placeholder="blur"
         blurDataURL={`${!staff?.node?.image ? noImg : staff?.node?.image?.medium}&w=16&q=1`}
           />
       <ul className="flex flex-col gap-4 text-xs p-2 dark:text-gray-100">
        <li><span> {staff?.node?.name?.full}</span></li>
        <li><span> {staff?.role}</span></li>
       </ul>
        </div>
 
  </div>
         })}
</div>
    )
}

export default StaffCard