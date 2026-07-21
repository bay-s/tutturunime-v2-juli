import axios from "axios"
import * as cheerio from 'cheerio';

let cache = {};
let lastFetch = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 jam

export async function getDetailEpisodeOploverz(title) {
  const cacheKey = `anime_detail_episode_${title}`;

  // ✅ cek cache
  if (cache[cacheKey] && Date.now() - lastFetch[cacheKey] < CACHE_DURATION) {
    return cache[cacheKey];
  }

      try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ
        const response = await axios(`${baseURI}/anime/${title}`)

        if (!response.status === 200) throw new Error("Failed fetch");

          const $ = cheerio.load(response.data);
          const page = $(`.postbody`)
          const link = $(`.eplister`)
          const recom = $(`.listupd`)
          const linkEpisode = []
          const genre = []
          const info = []
          const sinopsis = []

          $(page).find(".genxed > a").each((index,el) => {
                 genre.push({
                  slug:$(el).attr("href").split(baseURI)[1],
                  name:$(el).text().trim()
                 })
          })
      
          $(link).find("ul > li").each((index,el) => {
            linkEpisode.push({
              slug:$(el).find("a").attr("href").split(baseURI)[1],
              date:$(el).find(".epl-date").text(),
              title:$(el).find(".epl-title").text(),
              eps:$(el).find(".epl-num").text()
            })
         })
 
         $(page).find(".entry-content > p").each((index,el) => {
           sinopsis.push($(el).text())
       })

       $(page).find(".spe > span").each((index,el) => {
            info.push({
              textLeft:$(el).find("b").text(),
              textRight:$(el).text()
            })
        })

  const result = {
    linkEpisode,
    genre,
    sinopsis,
    originalTitle:$(page).find(".entry-title").text(),
    thumb:$(page).find(".thumb > img").attr().src,
    info
   }      

   cache[cacheKey] = result;
   lastFetch[cacheKey] = Date.now();
          
   return result

      } catch (error) {
        console.error(error);
        throw new Error("Scraping failed");
      }
 
  }
  
 
 
 
 
 
 