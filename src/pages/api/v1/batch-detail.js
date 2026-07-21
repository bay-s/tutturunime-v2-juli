import axios from "axios"
import * as cheerio from 'cheerio';

async function getAnimeBatchDetail(req, res) {
   const title = req.query.title
    if (req.method === 'GET') {
      try {
        const baseURI = process.env. NEXT_PUBLIC_BASE_URL
        const response = await axios(`${baseURI}/batch/${title}`)
      if(response.status === 200){
        const $ = cheerio.load(response.data);
        const page = $(".venser")
        const genre = []
        const  batchLink = {}
 
        $(page).find('.infos > a').each((i,el) => {
          genre.push({
            name:$(el).text().trim(),
            slug:$(el).attr("href").split(baseURI)[1]
          })
        })
   
   
        $(page).find(".batchlink > ul > li").each((i,el) => {
          const day = $(el).find("strong").text().trim()
          const names = []
          $(el).find("a").each((ix,elm) => {
  
            names.push(
          {
            linkTitle:$(elm).text().trim(),
            url:$(elm).attr("href")
          }
            );
          })
          batchLink[day] = names; 
        })
 
        return  res.status(200).json({
          title:$(".jdlrx h1").text().trim(),
          thumb:$(page).find("img").attr().src,
          batchTitle:$(".batchlink > h4").text().trim(),
          batchLink,
          info:$(page).find(".infos ").text().trim(),
          genre,
          sinopsis:[]
        });    
        }
         return res.status(500).json({ message: 'Something went wrong' });
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  
  export default  getAnimeBatchDetail;
 
 