import Recomendation from "@/component/layout/post/recomendation";
import DisqussComment from "@/component/layout/single-page/disqus-comment";
import ShareButton from "@/component/layout/single-page/share-button";
import SidebarSinglePage from "@/component/layout/single-page/sidebar-single-page";
import { getAnilistByTitle } from "@/lib/get-anilist-by-title";
import { TabsComponent } from "@/lib/tabs-component";
import axios from "axios";
import { useRouter } from "next/router";
import { Fragment, useContext, useState } from "react";
import { ValueContext } from "../value-context";
import { NextSeo } from "next-seo";
import MetaHead from "@/component/layout/header/meta-head";
import SinglePageBannerOploverz from "@/component/layout/single-page/single-page-banner-oploverz";
import SinglePageContentOploverz from "@/component/layout/single-page/single-page-content-oploverz";

const SingleAnimePage = ({detail,anilist}) => {
    const  siteInfo   = useContext(ValueContext)
       const router = useRouter()
       const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
   const [currentTabs,setCurrentTabs] = useState(0)
 
 
 
   const openTabs = (e) => {
     e.preventDefault()
     const name = e.currentTarget.dataset.tabs 
     setCurrentTabs(parseInt(name))

   }
  const tabsData = TabsComponent(anilist,detail,'episode')

 const data = {
  anime:detail,
  anilist,
  openTabs,
  currentTabs,
  type:"episode",
  tabsData,
  error:detail?.anilistError,
  slug:router.id
 }
 
    return(
<Fragment>
<MetaHead title={detail?.originalTitle} description={`Download dan nonton anime ${detail?.originalTitle} Sub indo , Berbagai resolusi ,360p , 480p , 720p , 1080p, MP4 dan MKV Hanya di ${siteInfo?.menus?.globalSeo?.siteName}`} slug={router.asPath} image={!anilist?.bannerImage  ? detail?.thumb : anilist?.bannerImage} />
<NextSeo
       title={`Nonton Anime ${detail?.originalTitle} - ${siteInfo?.menus?.menu?.siteName}`}
       description={`Download dan nonton anime ${detail?.originalTitle} Hanya di ${siteInfo?.menus?.menu?.siteName}`}
        openGraph={{
          type: 'website',
          url: `${path}/${router.asPath}`,
          title:`${detail?.originalTitle} - ${siteInfo?.menus?.menu?.siteName}`,
          description:`Download dan nonton anime ${detail?.originalTitle} Hanya di ${siteInfo?.menus?.menu?.siteName}`,
          images: [
            {
              url:!anilist?.bannerImage  ? detail?.thumb : detail?.originalTitle?.bannerImage,
              width: 1200,
              height: 630,
              alt: 'Featured image',
            },
          ],
          site_name:siteInfo?.menus?.menu?.siteName,
        }}
/>
<section className='flex flex-col gap-8 font-roboto '>
<SinglePageBannerOploverz anilist={anilist} />

<article className="grid grid-cols-4 md:gap-4 gap-8">
<SidebarSinglePage aniList={anilist} batch={detail} type='episode' />
<SinglePageContentOploverz data={data}/>
</article>


<ShareButton url={router.asPath} title={detail?.originalTitle} />
<DisqussComment anime={detail} slug={router.asPath} />
 
</section>

</Fragment>
    )
}

export default SingleAnimePage

export async function getServerSideProps(context) {
    const title = context.query.id
    const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
    try {
      
      const response = await axios.get(`${path}/api/v1/detail-oploverz?title=${title}`, {
        next: {
          revalidate: 10, 
          cache: 'force-cache',
        },
      });
 
      if (response.status === 200) {
        const aniList = await getAnilistByTitle(response?.data?.originalTitle.trim())
        return {
          props: {
           detail:response?.data,
           anilist: aniList?.data?.data?.Media ?? null
          },
        };
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Failed to fetch or parse HTML:', error);
      return {
        redirect: {
          destination: '/404', 
          permanent: false, 
        }
      };
    }
  }
 
 