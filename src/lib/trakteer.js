import Image from "next/image";

 
 
const Trakteer = () => {
 
    const img =  {
         src:"/img/trakteer.png",
         alt:"Link donasi",
         url:"https://trakteer.id/TutturuNime21",
         blurUrl:"data:image/jpeg;base64,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"
       }
    return (
   
  <article className="dark:bg-dark-gray bg-gray-100 shadow-lg dark:shadow rounded-md flex flex-col gap-3 mb-2">
  <div className="p-2">
  <h3 className='rounded border-s-4 border-purple-500 p-2 font-bold text-xl dark:text-gray-200 uppercase'>Donasi</h3>
  </div>
  <a href={img.url}  target="_blank"  className="focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xl px-6 py-3 dark:focus:ring-gray-700 lg:w-full lg:h-full w-[200px] h-[100px]">
       <Image
        loading="lazy"
          width={100}
            height={100}
            placeholder="blur"
          blurDataURL={img.blurUrl}
       src={img.src}
       className="w-full h-full object-contain"
       />  
   </a>
  </article>
    );
  };
   
  export default Trakteer;
  