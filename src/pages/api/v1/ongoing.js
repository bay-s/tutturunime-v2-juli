import axios from "axios"
import * as cheerio from 'cheerio';

let cache = {};
let lastFetch = {};

const CACHE_DURATION = 1000 * 60 * 30; // 30 menit


async function getAnimeOngoing(req, res) {
   const page = parseInt(req.query.page)
   const cacheKey = `ongoing_${page}`;
  
   // ✅ cek cache dulu
   if (cache[cacheKey] && Date.now() - lastFetch[cacheKey] < CACHE_DURATION) {
     return res.status(200).json(cache[cacheKey]);
   }

    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_BASE_URL
        let response = ""
        if(page === 1){
          response =  await axios(`${baseURI}`)
        }else{
          response = await axios(`${baseURI}/page/${page}`)
        }
 
 if(response.status === 200){
  const $ = cheerio.load(response.data);
  const page = $(`.excstf`)
  const next = $(".hpage")
  const ongoing = []
  const pagin = []
 
  page.find('.bsx').each((index,el) => {
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
 
 
          // ✅ simpan ke cache
          const result = {
            ongoing,
            pagination: {
              pagin,
              prevUrl: pagin[0]?.slug?.split("/")[1],
              nextUrl: pagin[1]?.slug?.split("/")[1],
            },
          };
      
          cache[cacheKey] = result;
          lastFetch[cacheKey] = Date.now();

  return res.status(200).json(result)
        }
        return res.status(500).json({ message: 'Something went wrong' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  
  export default  getAnimeOngoing;
 

   