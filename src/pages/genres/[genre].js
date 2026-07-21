import HomeSidebar from "@/component/layout/home/home-sidebar";
import GridCardContainer from "@/component/layout/grid-card-container";
import AnimeGenreCard from "@/component/layout/post/anime-genre-card";
import LoaderCard from "@/component/layout/post/loader-card";
import axios from "axios"
import { Fragment, useContext, useEffect, useState } from "react";
import { ValueContext } from "../value-context";
import MetaHead from "@/component/layout/header/meta-head";
import { getGenreAnime } from "@/lib/scrapper-genre";
 
const { useRouter } = require("next/router")

const SingleAnimePage = ({data}) => {

   const { query } = useRouter()
   const [isLoading,setIsLoading] = useState(true)
   const  siteInfo   = useContext(ValueContext)
   const jadwal = siteInfo?.menus?.jadwal

   useEffect(() => {
     if(data){
       setIsLoading(false)
     }
   },[])
console.log(query.page);
 const value = {
  data,
  page:query.page,
  title:`Genre: ${query.genre}`,
  path:`/genres/${query.genre}/page`,
  hide:false,
  type:'genre'
 } 
//  console.log(data);
    return(
 <Fragment>
    <MetaHead  title={`Genre: ${query.genre} - ${siteInfo?.menus?.globalSeo?.siteName}`} description={`Halaman hasil pencarian untuk genrer  ${query.genrez}`} />

    <section className='grid grid-cols-4 lg:gap-0 gap-12 my-2'>
<GridCardContainer value={value}>
{
   data.genre.map(item => {
        return isLoading ? <LoaderCard /> : <AnimeGenreCard anime={item} key={item.title}/>
   })
  }
</GridCardContainer>
<HomeSidebar jadwal={jadwal} />
</section>
 </Fragment>
    )
}

export default SingleAnimePage

export async function getServerSideProps(context) {
    const genre = context.query.genre
    const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
    try {
     
      const dataGenre = await getGenreAnime(genre,1)
   
      // const response = await axios.get(`${path}/api/v1/genre?genre=${genre}&page=1`, {
      //   next: {
      //     revalidate: 10, 
      //     cache: 'force-cache',
      //   },
      // });

      if (dataGenre) {
        return {
          props: {
            data:{
              genre:dataGenre?.genreAnime,
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

 