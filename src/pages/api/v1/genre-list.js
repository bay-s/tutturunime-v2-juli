import axios from "axios"
import * as cheerio from 'cheerio';

async function  getGenreList(req, res) {

    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_BASE_URL
        const response = await axios(`${baseURI}/genre-list/`)
        
        if(response.status === 200){
            const $ = cheerio.load(response.data);
            const page = $(`.genres`)
            const genre = []
            $(page).find("li a").each((i,el) => {
               genre.push({
                name:$(el).text(),
                slug:$(el).attr("href")
               })
         
            })
            return res.status(200).json(genre);
        }    
          
      return res.status(500).json({ message: 'Something went wrong' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  
  export default getGenreList;
 
 