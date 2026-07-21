import HomeSidebar from "@/component/layout/home/home-sidebar";
import GridCardContainer from "@/component/layout/grid-card-container";
import AnimeGenreCard from "@/component/layout/post/anime-genre-card";
import LoaderCard from "@/component/layout/post/loader-card";
import axios from "axios";
import { useRouter } from "next/router"
import { Fragment, useContext, useEffect, useState } from "react";
import { ValueContext } from "@/pages/value-context";
import MetaHead from "@/component/layout/header/meta-head";
import { getGenreAnime } from "@/lib/scrapper-genre";

const PaginationPage = ({data}) => {
  const router = useRouter()
  const { query } =  router
  const [isLoading,setIsLoading] = useState(true)
  const  siteInfo   = useContext(ValueContext)
  const jadwal = siteInfo?.menus?.jadwal

useEffect(() => {
  if(parseInt(query.page) < 0){
    router.push("/")
  }
  if(data){
    setIsLoading(false)
  }
},[query.page])
const value = {
  data,
  page:query.page,
  title:`Genre: ${query.genre}`,
  path:`/genres/${query.genre}/page`,
  hide:false,
  type:'genre'
 }

 
    return(
<Fragment>
<MetaHead title={`Genre: ${query.genre} halaman ${query.page} - ${siteInfo?.menus?.globalSeo?.siteName}`} description={`Halaman hasil pencarian untuk genre ${query.genrez}`} />

<section className='grid grid-cols-4 lg:gap-0 gap-12 my-2'>
<GridCardContainer value={value}>
{
   data?.genre.map(item => {
    return isLoading ? <LoaderCard /> : <AnimeGenreCard anime={item} key={item.title}/>
   })
  }
</GridCardContainer>
<HomeSidebar jadwal={jadwal} />
</section>
 
</Fragment>
    )
}

export default PaginationPage


export async function getServerSideProps(context) {
  const page = context.query.page
  const genre = context.query.genre
  const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
  try {
    // const response = await axios.get(`${path}/api/v1/genre?genre=${genre}&page=${page}`, {
    //   next: {
    //     revalidate: 10, 
    //     cache: 'force-cache',
    //   },
    // });
    const dataGenre = await getGenreAnime(genre,page)
    if (dataGenre ) {
      return {
        props: {
         data:{
          genre:dataGenre ?.genreAnime,
          pagination:dataGenre.pagination
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
