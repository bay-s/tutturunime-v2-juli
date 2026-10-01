import HomeSidebar from "@/component/layout/home/home-sidebar";
import Breadcrumb from "@/component/layout/home/breadcrumb";
import ShareButton from "@/component/layout/single-page/share-button";
import SinglePageTabs from "@/component/layout/single-page/single-page-tabs";
import { getAnilistByTitle } from "@/lib/get-anilist-by-title";
import axios from "axios"; 
import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import DisqussComment from "@/component/layout/single-page/disqus-comment";
import { NextSeo } from "next-seo";
import { ValueContext } from './value-context';
import HeaderEpisodeList from "@/component/layout/header-episode-list";
import MetaHead from "@/component/layout/header/meta-head";
import AnimeCard from "@/component/layout/post/anime-card";
import { TabsComponentWatch } from "@/lib/tab-component-watch";
import Alert from "@/component/layout/single-page/alert";
import Keyword from "@/component/layout/detail/keyword";
import { getEpisodeWatchAnime } from "@/lib/scrapper-watch";
 

 
 
const { useRouter } = require("next/router")

const  SingleEpisodePage = ({episode,anilist}) => {
  const  siteInfo   = useContext(ValueContext)
 
  const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
   const router = useRouter()
   const { query } = router
   const [currentTabs,setCurrentTabs] = useState(0)
   const openTabs = (e) => {
     e.preventDefault()
     const name = e.currentTarget.dataset.tabs 
     setCurrentTabs(parseInt(name))
 
   }

   const video = useRef(null)
   const tabsData = TabsComponentWatch(anilist,episode,'non-download',"non-download")
  
 
    return(
<Fragment>
<MetaHead title={episode?.epsTitle} description={`Download dan nonton anime ${episode?.epsTitle} Sub indo , Berbagai resolusi ,360p , 480p , 720p , 1080p, MP4 dan MKV Hanya di ${siteInfo?.menus?.globalSeo?.siteName}`} slug={router.asPath} image={!anilist?.bannerImage  ? episode?.thumb : anilist?.bannerImage} />
<NextSeo
       title={`Nonton Anime ${episode?.epsTitle} - ${siteInfo?.menus?.menu?.siteName}`}
       description={`Download dan nonton anime ${episode?.epsTitle} Sub indo , Berbagai resolusi ,360p , 480p , 720p , 1080p, MP4 dan MKV Hanya di ${siteInfo?.menus?.menu?.siteName}`}
        openGraph={{
          type: 'website',
          url: `${path}/${router.asPath}`,
          title:`${episode?.epsTitle} - ${siteInfo?.menus?.menu?.siteName}`,
          description:`Download dan nonton anime ${episode?.epsTitle} Sub indo , Berbagai resolusi ,360p , 480p , 720p , 1080p, MP4 dan MKV Hanya di ${siteInfo?.menus?.menu?.siteName}`,
          images: [
            {
              url:!anilist?.bannerImage  ? episode?.thumb
              : anilist?.bannerImage,
              width: 1200,
              height: 630,
              alt: 'Post thumbnail',
            },
          ],
          site_name:siteInfo?.menus?.menu?.siteName,
        }}
/>
 

<article className="flex flex-col gap-4">
 
<section className="grid grid-cols-4 gap-5">
 <div className="col-span-4 lg:col-span-3 flex flex-col gap-4">
 <Breadcrumb currentPage={`Nonton ${episode?.epsTitle}`} />
  <div className="aspect-video w-full rounded-md">
    
  <iframe src={episode?.videoUrl} ref={video} className={`w-full h-full rounded-md`} frameBorder="0" width="420" height="370" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
 
 
  </div>

  <HeaderEpisodeList episode={episode?.episodeList} query={query.slug} type="stream" />

  <SinglePageTabs currentTabs={currentTabs} openTabs={openTabs}  type="non-download" />
  {tabsData.map((tab, index) => (
        <div key={index} className={currentTabs === index ? 'mb-4' : 'hidden'}>
          {tab.component}
        </div>
  ))}
  
<Keyword anime={episode} />
<Alert />

<section className={episode?.recomend?.length < 1 ? "hidden" : "flex flex-col items-start gap-4"}>
<h3 className="font-bold text-2xl dark:text-gray-200 uppercase">Rekomendasi</h3>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 '>
{
  episode?.recomend?.slice(1,  episode?.recomend?.length).map(item => {
    return <AnimeCard anime={item} type={item?.type} key={item.title}  />
  })
}
</div>
</section>
 
<ShareButton url={router.asPath} title={episode?.originalTitle} />
<div className="my-7">
<DisqussComment anime={episode} slug={router.asPath} />
 </div>
</div>

<HomeSidebar  />
</section>

 
</article> 

</Fragment>
    )
}

export default SingleEpisodePage

 
  export async function getServerSideProps(context) {
    const title = context.query.slug
    // const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
    const dataWatchAnime = await getEpisodeWatchAnime(title)
    try {
      // const response = await axios.get(`${path}/api/v1/watch?title=${title}`, {
      //   next: {
      //     revalidate: 10, 
      //     cache: 'force-cache',
      //   },
      // });
 
      // const response = await fetch(`${path}/api/v1/watch?title=${title}`, {
      //   next: { revalidate: 3600 }, // 1 jam cache
      // })
 
      // const responseData = await response.json()
 
      if (dataWatchAnime) {
        const aniList = await getAnilistByTitle(dataWatchAnime?.originalTitle.trim())
        const data = {
          ...dataWatchAnime,
        }
   
        return {
          props: {
            episode:data,
            anilist: aniList?.data?.data?.Media ?? null
          },
        };
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Failed to fetch or parse HTML:', error);
      return {
      //  redirect: {
      //     destination: '/404', 
      //     permanent: false, 
      //   }
        props:{
          
        }
      };
    }
  }


 