import axios from "axios"
import * as cheerio from 'cheerio';

let cache = {};
let lastFetch = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 jam

export async function getGenreAnime(genre,pages) {
   const  page = parseInt(pages)
 
   const cacheKey = `genre_${genre}`;

   // ✅ cek cache
   if (cache[cacheKey] && Date.now() - lastFetch[cacheKey] < CACHE_DURATION) {
     return cache[cacheKey];
   }
 
      try {
        const baseURI = process.env.NEXT_PUBLIC_BASE_URL
      
       let response;
       
       if(page === 1){
        response =  await axios(`${baseURI}/genres/${genre}`)
       }else{
        response = await axios(`${baseURI}/genres/${genre}/page/${page}`)
       }
        
        if (!response.status === 200) throw new Error("Failed fetch");

          const $ = cheerio.load(response.data);
          const hpage = $(`.postbody`)
          const pagin = $(".pagination")
          const genreAnime = []
          const paginationNumber = []
     
    
          hpage.find('.bsx').each((index,el) => {
            genreAnime.push(
              {
                title:$(el).find(".tt > h2").text(),
                status:$(el).find(".epx").text(),
                type:$(el).find(".typez").text(),
                thumb:$(el).find('img').attr().src,
                slug:$(el).find('a').attr("href").split(baseURI)[1]
              })
            })
         
            $(pagin).find(".page-numbers").each((i,el) => {
              const text = $(el).text().trim();
              if (/\d/.test(text)) {
                paginationNumber.push(text)
              }
             })

         const prev = $(pagin)?.find(".prev")?.attr("href")?.split("/")[6]
         const next = $(pagin)?.find(".next")?.attr("href")?.split("/")[6]
    const result = {
                      genreAnime,
                      pagination:{
                        prevUrl:!$(pagin).find(".prev").text() ? null : prev,
                        pageNumber:paginationNumber,
                        nextUrl:!$(pagin).find(".next").text() ? null : next
                      }
        }     

    cache[cacheKey] = result;
    lastFetch[cacheKey] = Date.now();

    return result
        
      } catch (error) {
        console.error(error);
        throw new Error("Scraping failed");
      }

  }
  
 
 
 