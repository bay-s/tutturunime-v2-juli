
import axios from 'axios';
import * as cheerio from 'cheerio';

let cache = {};
let lastFetch = {};

const CACHE_DURATION = 1000 * 60 * 30; // 30 menit

export async function  getRekomen() {

    const cacheKey = `rekomen_homepage`;

    // ✅ cek cache
    if (cache[cacheKey] && Date.now() - lastFetch[cacheKey] < CACHE_DURATION) {
      return cache[cacheKey];
    }
  
      try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ 
 
        const response = await axios(`${baseURI}`)

     if (!response.status === 200) throw new Error("Failed fetch");
       
            const $ = cheerio.load(response.data);
            const hpage = $(`.series-gen`)
            const rekomen = []
          
          hpage.find('.bs').each((index,el) => {
         
            rekomen.push(
              {
                title:$(el).find("h2").text(),
                episode:$(el).find(".epx").text(),
                type:$(el).find(".typez").text(),
                thumb:$(el).find('img').attr().src,
                slug:$(el).find('a').attr("href").split(baseURI)[1]
              })
            })
        
        cache[cacheKey] = {rekomen};
        lastFetch[cacheKey] = Date.now();
           
        return {rekomen}

        }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
        }
  }
  
 
 
 

 