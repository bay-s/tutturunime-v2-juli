
import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import MetaHead from "@/component/layout/header/meta-head";
import { ValueContext } from "./value-context";
import * as cheerio from 'cheerio';
import GridCardContainer from "@/component/layout/grid-card-container";
import HomeSidebar from "@/component/layout/home/home-sidebar";
import LoaderCard from "@/component/layout/post/loader-card";
import AnimeCard from "@/component/layout/post/anime-card";
const { useRouter } = require("next/router")

const SearchResultPage = ({data}) => {
  const {query} = useRouter()
  const [isLoading,setIsLoading] = useState(true)
  const  siteInfo   = useContext(ValueContext)

  useEffect(() => {
    if(data){
      setIsLoading(false)
    }
  },[ ])

 
  const value = {
    data,
    page:null,
    title:`Hasil Pencarian: ${query.title}`,
    path:'',
    hide:true,
    type:'search'
   }
    return(
<Fragment>
  <MetaHead  title={`Search for  ${query.title} - ${siteInfo?.menus?.globalSeo?.siteName}`} description={`Halaman hasil pencarian untuk anime  ${query.title}`} />

 {/* <section className='grid grid-cols-4 gap-2'>
<GridCardContainer value={value}>
{
data?.searchResult.map(item => {
  return isLoading ? <LoaderCard /> : <AnimeCard anime={item} type='complete' key={item.title} />
})
 }
</GridCardContainer>
<HomeSidebar jadwal={data?.jadwal} />
</section> */}

</Fragment>
 
    )
}

export default SearchResultPage

export async function getServerSideProps(context) {
    const queryTitle = context.query.title
    const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
 
    const response = await axios.get(`${baseURI}?s=${queryTitle}&post_type=anime`)
    const $ = cheerio.load(response.data);
    const page = $(`.page`)
    const genre = []
    const searchResult = []
   $(page).find(".set > a").each((i,el) => {
    genre.push({
      name:$(el).text().trim(),
      slug:$(el).attr("href")
    })
   })
    $(page).find(".chivsrc li").each((i,el) => {
      searchResult.push(
          {
            title:$(el).find("h2 > a").text().trim(),         
             thumb:$(el).find('img').attr().src,
            slug:$(el).find("h2 > a").attr("href").split(baseURI)[1],
            genre
          })
   })
   
    const jadwal = await axios.get(`${path}/api/v1/jadwal`)
   console.log(searchResult);
      return {
        props: {
         data:{
          jadwal:jadwal?.data,
          searchResult
         }
        },
      };
  }