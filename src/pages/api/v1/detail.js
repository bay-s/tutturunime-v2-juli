import axios from "axios"
import * as cheerio from 'cheerio';
import { episodeHelper } from "./episode-helper";

async function getDetailAnime(req, res) {
   const title = req.query.title
    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_BASE_URL
        const response = await axios(`${baseURI}/anime/${title}`)
        if(response.status === 200){
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
        
          return res.status(200).json(
            {
              linkEpisode,
              genre,
              sinopsis,
              originalTitle:$(page).find(".entry-title").text(),
              thumb:$(page).find(".thumb > img").attr().src,
              info
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
  
  export default getDetailAnime;
 
 