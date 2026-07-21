import axios from "axios"
import * as cheerio from 'cheerio';
 
let cache = {};
let lastFetch = {};

const CACHE_DURATION = 1000 * 60 * 30; // 30 menit

export async function getEpisodeWatchAnime(title) {
    const cacheKey = `watch_${title}`;

    // ✅ cek cache
    if (cache[cacheKey] && Date.now() - lastFetch[cacheKey] < CACHE_DURATION) {
      return cache[cacheKey];
    }
  
  
      try {
        const baseURI = process.env.NEXT_PUBLIC_BASE_URL
        const response = await axios(`${baseURI}/${title}`)

       if (!response.status === 200) throw new Error("Failed fetch");

          const $ = cheerio.load(response.data);
          const page = $(`.postbody`)
          const vid = $(`.megavid`)
          const link = $(`.mctnx`)
          const episode = $(`.episodelist`)
          const epsList = []
          const recom = $(`.listupd`)
          const nextPrevVideo = []
          const videoFormat = []
          const linkDownload =  {}
          const genre = []
          const recomend = []
          const info = []
 
        $(page).find(".spe > span").each((index,el) => {
             info.push({
               textLeft:$(el).find("b").text(),
               textRight:$(el).text()
             })
         })

          $(page).find(".genxed > a").each((index,el) => {
                 genre.push({
                  slug:$(el).attr("href").split(baseURI)[1],
                  name:$(el).text().trim()
                 })
          })
      
          $(link).find(".soraddlx > .sorattlx").each((index,el) => {
            videoFormat.push($(el).text())
         })
      
         $(vid).find(".naveps > .nvs").each((index,el) => {
           const links = $(el).find("a").attr("href")
           if(links){
            nextPrevVideo.push({
              text:$(el).find("a").text().trim(),
              link:links.split(baseURI)[1]
            })
           } 
         })
       
         $(link).find('.soraddlx > .soraurlx').each((i,el) => {
          const day = $(el).find("strong").text().trim()
          const names = []
         $(el).find("a").each((index,link) => {
          names.push(
            {
              linkTitle:$(link).text(),
              url:$(link).attr("href")  
            }
              );
         })
         linkDownload[day] = names; 
        })

        $(episode).find("ul > li").each((index,el) => {
          epsList.push({
            slug:$(el).find("a").attr("href").split(baseURI)[1],
            date:$(el).find(".playinfo > span").text(),
            title:$(el).find(".playinfo > h3").text(),
            eps:$(el).find(".playinfo > h3").text()
          })
       })

  recom.find('.bsx').each((index,el) => {
    recomend.push(
     {
       title:$(el).find(".tt > h2").text(),
       status:$(el).find(".status").text(),
       type:$(el).find(".typez").text(),
       thumb:$(el).find('img').attr().src,
       slug:$(el).find('a').attr("href").split(baseURI)[1]
     })
   })


   const result = 
    {
        linkDownload,
        nextPrevVideo,
        genre,
        info,
        sinopsis:$(page).find(".desc").text().trim(),
        epsTitle:$(vid).find(".entry-title").text(),
        originalTitle:$(page).find(".infolimit > h2").text(),
        thumb:$(page).find(".thumb > img").attr().src,
        videoUrl:$(vid).find(".player-embed > iframe").attr("src"),
        status:$(page).find(".spe > span").text(),
        recomend,
        episodeList:epsList
       }
   
       cache[cacheKey] = result;
       lastFetch[cacheKey] = Date.now();
          
   return result

   
        } catch (error) {
            console.error(error);
            throw new Error("Scraping failed");
      }
    }
  
  

 
 