import Image from "next/image"
 
const SinglePageBanner = ({data}) => {
    const background = {
        backgroundImage: `url(${data?.aniList?.bannerImage})`
       } 
 
    return(
 <section className='flex flex-col gap-8 font-roboto rounded'>
 <div className={!data?.aniList?.bannerImage || data?.type === 'video' ? "hidden invisible" : "banner sm:h-96 h-44"} style={background}></div>


 {/* <div className={`grid grid-cols-4 items-start px-1 md:px-14 rounded dark:shadow gap-8 justify-center`}>
    <figure className=" rounded-md col-span-4 sm:col-span-2 md:col-span-1 ">
    <Image
      src={data?.anime?.thumb}
      unoptimized
      width={100}
      height={100}
      className="md:object-contain object-cover object-center w-full h-72 sm:h-80 rounded-md"
      alt={`Nonton anime ${data?.anime.title} Subtitle indonesia.`}
      />
    </figure>
<div className={`flex flex-col gap-3 col-span-4 md:col-span-3 sm:px-2`}>
 <h1 className="font-bold text-lg md:text-2xl dark:text-white" itemProp="headline">Nonton Anime {data?.anime.title}</h1>
 {
   data?.anime?.sinopsis?.length < 1 ?  <p className="leading-6 tracking-wide text-xs dark:text-white"  dangerouslySetInnerHTML={{__html:data?.aniList?.description}} /> : data?.anime?.sinopsis?.map(text => {
      return <p className="leading-6 tracking-wide text-xs dark:text-gray-100 dark:text-white" key={text}>{text}</p>
    })
  }
  </div>
    
  </div> */}
  
</section>
    )
}

export default SinglePageBanner