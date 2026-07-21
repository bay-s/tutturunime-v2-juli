import axios from "axios"
import * as cheerio from 'cheerio';

let cache = {};
let lastFetch = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 jam

export async function  getSearchAnime(title) {

   const cacheKey = `anime_title_${title}`;

   // ✅ cek cache
   if (cache[cacheKey] && Date.now() - lastFetch[cacheKey] < CACHE_DURATION) {
     return cache[cacheKey];
   }

try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ 
        const response = await axios.get(`${baseURI}?s=${title}`)
 
if (!response.status === 200) throw new Error("Failed fetch");

  const $ = cheerio.load(response.data);
  const page = $(`.listupd`)
  const result = []

  page.find('.bsx').each((index,el) => {
    result.push(
      {
        title:$(el).find(".tt > h2").text(),
        type:$(el).find(".typez").text(),
        status:$(el).find(".epx").text(),
        thumb:$(el).find('img').attr().src,
        slug:$(el).find('a').attr("href").split(baseURI)[1]
      })
    })
     
    cache[cacheKey] = result;
    lastFetch[cacheKey] = Date.now();
 
    return result

      } catch (error) {
        console.error(error);
        throw new Error("Scraping failed");
      }
  }
  
 
 
//  asdas