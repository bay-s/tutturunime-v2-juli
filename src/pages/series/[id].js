import Recomendation from "@/component/layout/post/recomendation";
import DisqussComment from "@/component/layout/single-page/disqus-comment";
import ShareButton from "@/component/layout/single-page/share-button";
import SidebarSinglePage from "@/component/layout/single-page/sidebar-single-page";
import SinglePageBanner from "@/component/layout/single-page/single-page-banner";
import { getAnilistByTitle } from "@/lib/get-anilist-by-title";
import axios from "axios";
import { useRouter } from "next/router";
import { Fragment, useContext, useState } from "react";
import { ValueContext } from "../value-context";
import { NextSeo } from "next-seo";
import MetaHead from "@/component/layout/header/meta-head";
import SinglePageContent from "@/component/layout/single-page/single-page-content";

const SingleAnimePage = ({detail}) => {
   const [currentTabs,setCurrentTabs] = useState(0)
   const  siteInfo   = useContext(ValueContext)
   const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
   const router = useRouter()
   const openTabs = (e) => {
     e.preventDefault()
     const name = e.currentTarget.dataset.tabs 
     setCurrentTabs(parseInt(name))

   }
 
 const data = {
  anime:detail?.anime,
  aniList:detail.aniList,
  openTabs,
  currentTabs,
  type:"stream",
 
  error:detail?.aniListError
 }
 
 console.log(detail);
 console.log('anime');
    return(
<Fragment>
<MetaHead title={data.anime.title} description={`Download dan nonton anime ${data.anime.title} Sub indo , Berbagai resolusi ,360p , 480p , 720p , 1080p, MP4 dan MKV Hanya di ${siteInfo?.menus?.globalSeo?.siteName}`} slug={router.asPath} image={!data?.aniList?.bannerImage  ? data?.anime?.thumb : data?.aniList?.bannerImage} />
<NextSeo
       title={`Nonton Anime ${data.anime.title} - ${siteInfo?.menus?.globalSeo?.siteName}`}
       description={`Download dan nonton anime ${data.anime.title} Hanya di ${siteInfo?.menus?.globalSeo?.siteName}`}
        openGraph={{
          type: 'website',
          url: `${path}/${router.asPath}`,
          title:`${data.anime.title} - ${siteInfo?.menus?.globalSeo?.siteName}`,
          description:`Download dan nonton anime ${data.anime.title} Hanya di ${siteInfo?.menus?.globalSeo?.siteName}`,
          images: [
            {
              url:!data?.aniList?.bannerImage  ? data?.anime?.thumb : data?.aniList?.bannerImage,
              width: 1200,
              height: 630,
              alt: 'Featured image',
            },
          ],
          site_name:siteInfo?.menus?.globalSeo?.siteName,
        }}
/>
<section className='flex flex-col gap-8 font-roboto '>
  <SinglePageBanner data={data} />

<article className="grid grid-cols-4 md:gap-4 gap-8">
<SidebarSinglePage aniList={detail?.aniList} batch={detail?.anime} type='stream' />
<SinglePageContent data={data} />
</article>


<ShareButton url={router.asPath} title={data.anime?.title} />
<DisqussComment anime={data.anime} slug={router.asPath} />
 
</section>

</Fragment>
    )
}

export default SingleAnimePage

export async function getServerSideProps(context) {
    const title = context.query.id
    const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
    console.log(title);
    try {
      const response = await axios.get(`${path}/api/v1/detail?title=${title}`, {
        next: {
          revalidate: 10, 
          cache: 'force-cache',
        },
      });

      // const originalTitle = response.data.info.filter(item => item.startsWith("Judul:"));

      // const searchTerm  = response?.data?.originalTitle.join("").split(":")[1].trim()
      const titles = response?.data?.originalTitle === 'Yowamushi Pedal Season 5' ? "Yowamushi Pedal: LIMIT BREAK" : response?.data?.originalTitle
      const aniList = await getAnilistByTitle(titles)
 
      if (response.status === 200) {
        return {
          props: {
           detail:{
            anime:response.data,
            aniList:!aniList.data ? null : aniList?.data?.data?.Media,
            aniListError:!aniList?.data
           }
          },
        };
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Failed to fetch or parse HTML:', error);
      return {
        // redirect: {
        //   destination: '/404', 
        //   permanent: false, 
        // }
        props:{
          
        }
      };
    }
  }
 



 