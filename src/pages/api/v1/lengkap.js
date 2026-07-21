import axios from "axios"
import * as cheerio from 'cheerio';

async function getAnimeOngoing(req, res) {
   const page = req.query.page
    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_BASE_URL
        let response =   await axios.get(`https://samehadaku.bond/`)
  
 if(response.status === 200){
    const $ = cheerio.load(response.data);
          const result = {
             title:$("title").text()
          };

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
 
 