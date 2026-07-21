import axios from "axios"
import * as cheerio from 'cheerio';
import { episodeHelper } from "./episode-helper";

async function getEpisodeAnime(req, res) {
   const title = req.query.title
    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ
        const response = await axios(`${baseURI}/${title}`)
        if(response.status === 200){
          const $ = cheerio.load(response.data);
          const page = $(`.single-info`)
          const vid = $(`.megavid`)
          const link = $(`.mctnx`)
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
        //   console.log("start______________________________________________start"); 
        //   console.log(genre);  
        //   console.log(nextPrevVideo);
        //   console.log(linkDownload);
        //   console.log($(page).find(".thumb > img").attr().src);
        //   console.log($(page).find(".infolimit > h2").text());
        //   console.log($(page).find(".desc").text().trim());
        //   console.log($(page).find(".spe > span").text());
        //   console.log($(vid).find(".player-embed > iframe").attr("src"));
        //   console.log($(vid).find(".title-section > h1").text());
        // console.log("______________________________________________");
        console.log($(vid).find(".player-embed > iframe"));
        console.log("document?");
        console.log("_____________________________");
          return res.status(200).json(
            {
              linkDownload,
              nextPrevVideo,
              genre,
              info,
              sinopsis:$(page).find(".desc").text().trim(),
              epsTitle:$(vid).find(".title-section > h1").text(),
              originalTitle:$(page).find(".infolimit > h2").text(),
              thumb:$(page).find(".thumb > img").attr().src,
              videoUrl:$(vid).find(".player-embed > iframe").attr("src"),
              status:$(page).find(".spe > span").text(),
              recomend
             }
           );    
        }    
        return res.status(500).json({ message: 'Something went wrong' });
      } catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Something went wrong', error});
      }
    }
  }
  
  export default getEpisodeAnime;
 
 