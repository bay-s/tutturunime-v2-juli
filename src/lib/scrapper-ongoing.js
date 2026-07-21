import axios from 'axios';
import * as cheerio from 'cheerio';

let cache = {};
let lastFetch = {};

const CACHE_DURATION = 1000 * 60 * 30; // 30 menit

export async function getOngoing(page) {
  const cacheKey = `ongoings_${parseInt(page)}`;

  // ✅ cek cache
  if (cache[cacheKey] && Date.now() - lastFetch[cacheKey] < CACHE_DURATION) {
    return cache[cacheKey];
  }

  try {
    const baseURI = process.env.NEXT_PUBLIC_BASE_URL
    let response = ""
    if(parseInt(page) === 1){
      response =  await axios(`${baseURI}`)
    }else{
      response = await axios(`${baseURI}/page/${page}`)
    }
 
//  if (!response.status === 200) throw new Error("Failed fetch");
if (response.status === 200){
    const $ = cheerio.load(response.data);
    const pages = $(`.excstf`)
    const next = $(".hpage")
    const ongoing = []
    const pagin = []

    pages.find('.bsx').each((index,el) => {
        ongoing.push(
         {
           title:$(el).find(".tt > h2").text(),
           episode:$(el).find(".epx").text(),
           type:$(el).find(".typez").text(),
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
   const            pagination = {
    pagin,
    prevUrl: pagin[0]?.slug?.split("/")[1],
    nextUrl: pagin[1]?.slug?.split("/")[1],
  }
             // ✅ simpan ke cache
             const result = {
               ongoing,
               pagination
             };
   
    cache[cacheKey] = result;
    lastFetch[cacheKey] = Date.now();
   
    return result;

}   
 
  } catch (error) {
    console.error(error);
    throw new Error("Scraping failed");
  }
}