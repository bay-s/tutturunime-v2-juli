import axios from "axios"
import * as cheerio from 'cheerio';

let cache = {};
let lastFetch = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 jam

export async function  getJadwalList() {
    const cacheKey = `jadwal_anime`;

    // ✅ cek cache
    if (cache[cacheKey] && Date.now() - lastFetch[cacheKey] < CACHE_DURATION) {
      return cache[cacheKey];
    }

      try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ 
        const response = await axios(`${baseURI}/jadwal-rilis/`)

       if (!response.status === 200) throw new Error("Failed fetch");

          const $ = cheerio.load(response.data);
          const page = $(".postbody")
          const jadwal = {}
       
          $(page).find(".schedulepage").each((i, el) => {
              const day = $(el).find(".releases > h3 > span").text().trim();
              const names = [];
      
              $(el).find(".bsx").each((idx, elm) => {
                  names.push(
                    { 
                      title:$(elm).find(".tt").text(),
                      thumb:$(elm).find('img').attr().src,
                      slug:$(elm).find('a').attr("href").split(baseURI)[1]
                    });
          
              });
          
              jadwal[day] = names;  // Assign the names array to the corresponding day key
          
          });
            
       

      cache[cacheKey] = jadwal;
      lastFetch[cacheKey] = Date.now();
             
      return jadwal
           

      } catch (error) {
        console.error(error);
        throw new Error("Scraping failed");
      }
  }
  
 
 
 

 