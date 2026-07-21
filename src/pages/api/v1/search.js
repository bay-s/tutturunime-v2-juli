import axios from "axios"
import * as cheerio from 'cheerio';

async function  getSearchAnime(req, res) {
   const title = req.query.title
    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ 
        const response = await axios.get(`${baseURI}?s=${title}&post_type=anime`)
 
 if(response.status === 200){
   const $ = cheerio.load(response.data);
   const page = $(`.page`)
  const genre = []
  const searchResult = []
  
 $(page).find(".set > a").each((i,el) => {
  genre.push({
    name:$(el).text().trim(),
    slug:$(el).attr("href")
  })
 })
  $(page).find(".chivsrc li").each((i,el) => {
    searchResult.push(
        {
          title:$(el).find("h2 > a").text().trim(),         
           thumb:$(el).find('img').attr().src,
          slug:$(el).find("h2 > a").attr("href").split(baseURI)[1],
          genre
        })
 })
 
       return res.status(200).json(searchResult)
        }
        return res.status(500).json({ message: 'Something went wrong' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  
  export default  getSearchAnime;
 
 