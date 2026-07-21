import axios from "axios"
import * as cheerio from 'cheerio';

let cache = {};
let lastFetch = {};

const CACHE_DURATION = 1000 * 60 * 30; // 30 menit


export async function getAnimeOngoingOplovers(pages) {
   const page = parseInt(pages)
   const cacheKey = `ongoing_oploverz_${parseInt(page)}`;

   if (cache[cacheKey] && Date.now() - lastFetch[cacheKey] < CACHE_DURATION) {
    return cache[cacheKey];
  }

 
 
 try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ
        let response = ""
        if(page === 1){
          response =  await axios(`${baseURI}`)
        }else{
          response = await axios(`${baseURI}/page/${page}`)
        }
 
 if(response.status === 200){
  const $ = cheerio.load(response.data);
  const hpage = $(`.excstf`)
  const next = $(".hpage")
  const ongoing = []
  const pagin = []
 

  hpage.find('.stylesix').each((index,el) => {
     ongoing.push(
      {
        title:$(el).find(".inf > h2 > a").text(),
        episode:$(el).find(".epx").text(),
        type:$(el).find(".eggtype").text(),
        thumb:$(el).find('img').attr().src,
        slug:$(el).find('a').attr("href").split(baseURI)[1]
      })
      
    })
 
   next.find('a').each((index,el) => {
       pagin.push({
        name:$(el).text(),
        slug:$(el).attr("href").split(baseURI)[1]
       })
     })
 
    const result = {
    ongoing,
    pagination:{
     pagin,
    prevUrl:pagin[0]?.slug.split('/')[1],
    nextUrl:pagin[1]?.slug.split('/')[1]
    }
    }

    cache[cacheKey] = result;
    lastFetch[cacheKey] = Date.now();
    
    return result
    }
 
      } catch (error) {
        console.error(error);
        throw new Error("Scraping failed");
      }

  }
  
 
 
 