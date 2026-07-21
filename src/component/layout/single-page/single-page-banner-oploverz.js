import Image from "next/image"
 
const SinglePageBannerOploverz = ({anilist}) => {
    const background = {
        backgroundImage: `url(${anilist?.bannerImage})`
       } 
 
       console.log(!anilist);
    return(
 <section className='flex flex-col gap-8 font-roboto rounded'>
 <div className={!anilist ? "hidden" : "banner sm:h-96 h-44"} style={background}></div>
 
</section>
    )
}

export default SinglePageBannerOploverz