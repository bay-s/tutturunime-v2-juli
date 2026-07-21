import { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import HomeSidebar from '@/component/layout/home/home-sidebar';
import { ValueContext } from './value-context';
import { getAnilistByTitle } from '@/lib/get-anilist-by-title';
import HomepageBanner from '@/component/layout/home/homepage-banner';
import HomePage from '@/component/layout/home/homepage';
import { NextSeo } from 'next-seo';
import OGPTags from '@/component/layout/header/otg-page';
import { getOngoing } from '@/lib/scrapper-ongoing';
import { getAnimeOngoingOplovers } from '@/lib/scrapper-ongoing-oploverz';
import { getRekomen } from '@/lib/scrapper-rekomen';


export default function Home({data}) {
  const  siteInfo   = useContext(ValueContext)
  const logo = "/img/mayuri.png"
  // console.log(data);
  return (
<Fragment>
<OGPTags />
<NextSeo
       title={`${siteInfo?.menus?.menu?.siteName} - Tempat Download dan Nonton Anime subtitle indonesia`}
       description={`${siteInfo?.menus?.menu?.siteName} adalah Tempat Nonton anime subtitle indonesia dan download Batch, Tersedia berbagai resolusi ,360 ,480p , 720p, 1080p , mp4 dan mkv.`}
        openGraph={{
          type: 'website',
          url: `https://www.tutturunime.my.id/`,
          title:`${siteInfo?.menus?.menu?.siteName} - adalah Tempat Nonton anime subtitle indonesia dan download Batch, Tersedia berbagai resolusi ,360 ,480p , 720p, 1080p , mp4 dan mkv.`,
          description:siteInfo?.menus?.menu?.siteName + " " + "adalah Tempat Nonton anime subtitle indonesia dan download Batch, Tersedia berbagai resolusi ,360 ,480p , 720p, 1080p , mp4 dan mkv.",
          images: [
            {
              url:logo ,
              width: 1200,
              height: 630,
              alt: 'TutturuNime Nonton Anime subtitle indonesia.',
            },
          ],
          site_name:siteInfo?.menus?.menu?.siteName,
        }}
/>
 
<section className='grid grid-cols-4 lg:gap-0 gap-12 my-2'>
<HomePage data={data} />
  <HomeSidebar rec={data?.rekomen} />
</section>
 
</Fragment>
  )
}


export async function getStaticProps() {
  try {
    const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH;
    const dats = await getOngoing(1)
    const oploverz = await getAnimeOngoingOplovers(1)
    const rek = await getRekomen()
    // const response = await axios.get(`${path}/api/v1/ongoing?page=1`, {
    //   next: {
    //     revalidate: 86400, 
    //     // cache: 'force-cache',
    //   },
    // });

    // const oplvrz = await axios.get(`${path}/api/v1/ongoing-oploverz?page=1`, {
    //   next: {
    //     revalidate: 86400, 
    //     // cache: 'force-cache',
    //   },
    // });

    // const rec = await axios.get(`${path}/api/v1/rekomen`, {
    //   next: {
    //     revalidate: 86400, 
    //     // cache: 'force-cache',
    //   },
    // })
    

    const [ongoingRes ] = await Promise.all([
      fetch(`${path}/api/v1/ongoing?page=1`, {
        next: { revalidate: 3600 }, // 1 jam cache
      }),
      // fetch(`${path}/api/v1/ongoing-oploverz?page=1`, {
      //   next: { revalidate: 3600 },
      // }),
      // fetch(`${path}/api/v1/rekomen`, {
      //   next: { revalidate: 3600 },
      // }),
    ]);

    const ongoing = await ongoingRes.json();
    //  const oplovers = await oploverzRes.json();
    // const rec = await recRes.json();
 console.log("data");
 
console.log("________________________");
    if (ongoingRes.status === 200) {
 
      return {
        props: {
          data: {
            ongoing:dats?.ongoing,
            pagination:ongoing.pagination,
            oploverz:oploverz?.ongoing,
            rekomen:rek?.rekomen ?? null,
          },
        },
        revalidate: 60 * 59, // ISR
      };
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    // console.error('Failed to fetch or parse HTML:', error);
    return {
      props: {
        error: 'Failed to fetch data',
      },
    };
  }
}


 