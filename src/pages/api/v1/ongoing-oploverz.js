import axios from "axios"
import * as cheerio from 'cheerio';

async function getAnimeOngoing(req, res) {
   const page = req.query.page
    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ
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
 

  page.find('.stylesix').each((index,el) => {
     ongoing.push(
      {
        title:$(el).find(".inf > h2 > a").text(),
        episode:$(el).find(".epx").text(),
        type:$(el).find(".eggtype").text(),
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
 
     const pagination = {
      pagin,
     prevUrl:pagin[0]?.slug.split('/')[1],
     nextUrl:pagin[1]?.slug.split('/')[1]
     }
          return res.status(200).json({ongoing,
          pagination})
        }
        return res.status(500).json({ message: 'Something went wrong' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  
  export default  getAnimeOngoing;
 
 