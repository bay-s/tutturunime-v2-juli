import HomeSidebar from "@/component/layout/home/home-sidebar";
import GridCardContainer from "@/component/layout/grid-card-container";
import AnimeCard from "@/component/layout/post/anime-card";
import LoaderCard from "@/component/layout/post/loader-card";
import axios from "axios";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect, useState } from "react";
import { ValueContext } from "../value-context";
import MetaHead from "@/component/layout/header/meta-head";


const AnimeCompletePage = ({data}) => {
  const router = useRouter()
  const { query } =  router
  const [isLoading,setIsLoading] = useState(true)
  const  siteInfo   = useContext(ValueContext)
   
  useEffect(() => {
    if(data){
      setIsLoading(false)
    }
  },[])

  const value = {
    data,
    page:query.page,
    title:"Anime Complete",
    path:'/completed/page',
    hide:false,
    type:'ongoing'
   }
    return( 
<Fragment>
<MetaHead  title={`Anime Complete  - ${siteInfo?.menus?.globalSeo?.siteName}`} description={`Halaman anime complete, cari anime untuk di tonton maupun download hanya di - ${siteInfo?.menus?.globalSeo?.siteName}`} />

<section className='grid grid-cols-4 gap-2'>
<GridCardContainer value={value}>
{
               data.complete.map(item => {
     return isLoading ? <LoaderCard /> : <AnimeCard anime={item} type='complete' key={item.title} />
                })
  }
</GridCardContainer>
<HomeSidebar jadwal={data?.jadwal} />
</section>
</Fragment>
    )
}

export default AnimeCompletePage

export async function getServerSideProps() {
    try {
      const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
      const response = await axios.get(`${path}/api/v1/complete?page=1`, {
        next: {
          revalidate: 10, 
          cache: 'force-cache',
        },
      });
      const jadwal = await axios.get(`${path}/api/v1/jadwal`, {
        next: {
          revalidate: 10, 
          cache: 'force-cache',
        },
      });
      if (response.status === 200) {
        return {
          props: {
           data:{
            complete:response.data.batch,
            totalPages:response.data.totalPages,
            jadwal:jadwal.data,
            pagination:response.data.pagination
           }
          },
        };
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Failed to fetch or parse HTML:', error);
      return {
        props: {
          error: 'Failed to fetch data',
        },
      };
    }
  }
  