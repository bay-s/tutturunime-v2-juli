import HomeSidebar from "@/component/layout/home/home-sidebar";
import GridCardContainer from "@/component/layout/grid-card-container";
import AnimeCard from "@/component/layout/post/anime-card";
import LoaderCard from "@/component/layout/post/loader-card";
 
import axios from "axios";
import { useRouter } from "next/router"
import { Fragment, useContext, useEffect, useState } from "react";
import MetaHead from "@/component/layout/header/meta-head";
import { ValueContext } from "@/pages/value-context";

const PaginationPage = ({data}) => {
  const router = useRouter()
  const { query } =  router
  const [isLoading,setIsLoading] = useState(true)
  const  siteInfo   = useContext(ValueContext)
 
useEffect(() => {
  if(data){
    setIsLoading(false)
  }
  if(parseInt(query.page) < 0){
    router.push("/")
  }
},[query.page])


const value = {
  data,
  page:query.page,
  title:"Anime Ongoing",
  path:'/',
  hide:false,
  type:'ongoing',
  pagination:data?.pagination
 }
 
 console.log(data);
    return(
<Fragment>
    <MetaHead  title={`Anime Ongoing Page ${query.page} - ${siteInfo?.menus?.menu?.siteName}`} description={`Halaman anime ongoing, cari anime untuk di tonton maupun download hanya di - ${siteInfo?.menus?.menu?.siteName}`} />

 <section className='grid grid-cols-4 gap-2'>
<GridCardContainer value={value}>
{
               data.ongoing.map(item => {
                  return isLoading ? <LoaderCard /> : <AnimeCard anime={item} type='ongoing' slugType="oploverz" key={item.title} source="oploverz"/>
                })
}
</GridCardContainer>
<HomeSidebar  />
 
</section>
  </Fragment>
    )
}

export default PaginationPage


export async function getServerSideProps(context) {
  const page = context.query.page
  const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
  if (page === "1") {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  try {
    // const response = await axios.get(`${path }/api/v1/ongoing-oploverz?page=${page}`, {
    //   next: {
    //     revalidate: 10, 
    //     cache: 'force-cache',
    //   },
    // });
 
    const response = await fetch(`${path }/api/v1/ongoing-oploverz?page=${page}`, {
      next: { revalidate: 3600 }, // 1 jam cache
    })
    const responseData = await response.json()
    if (response.status === 200) {
      return {
        props: {
          data:{
            ongoing:responseData?.ongoing,
            pagination:responseData?.pagination
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
