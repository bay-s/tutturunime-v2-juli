import axios from "axios"
import * as cheerio from 'cheerio';

async function  getSearchAnime(req, res) {
   const title = req.query.title
    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ 
        const response = await axios.get(`${baseURI}?s=${title}`)
 
 if(response.status === 200){
  const $ = cheerio.load(response.data);
  const page = $(`.listupd`)
  const result = []

  page.find('.bsx').each((index,el) => {
    result.push(
      {
        title:$(el).find(".tt > h2").text(),
        type:$(el).find(".typez").text(),
        status:$(el).find(".epx").text(),
        thumb:$(el).find('img').attr().src,
        slug:$(el).find('a').attr("href").split(baseURI)[1]
      })
    })
       return res.status(200).json(result)
        }
        return res.status(500).json({ message: 'Something went wrong' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  
  export default  getSearchAnime;
 
//  asdas