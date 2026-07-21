import axios from "axios"
import * as cheerio from 'cheerio';

async function  getRekomen(req, res) {

    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ 
        const response = await axios(`${baseURI}`)
      
        if(response.status === 200){
            const $ = cheerio.load(response.data);
            const page = $(`.series-gen`)
            const rekomen = []
          
          page.find('.bs').each((index,el) => {
         
            rekomen.push(
              {
                title:$(el).find("h2").text(),
                episode:$(el).find(".epx").text(),
                type:$(el).find(".typez").text(),
                thumb:$(el).find('img').attr().src,
                slug:$(el).find('a').attr("href").split(baseURI)[1]
              })
            })

            return res.status(200).json({rekomen});        
        }    
      return  res.status(500).json({ message: 'Something went wrong' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  
  export default getRekomen;
 
 

 