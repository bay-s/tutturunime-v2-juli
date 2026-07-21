import axios from "axios"
import * as cheerio from 'cheerio';

async function  getJadwalList(req, res) {

    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ 
        const response = await axios(`${baseURI}/jadwal-rilis/`)
        if(response.status === 200){
          const $ = cheerio.load(response.data);
          const page = $(".postbody")
          const jadwal = {}
       
          $(page).find(".schedulepage").each((i, el) => {
              const day = $(el).find(".releases > h3 > span").text().trim();
              const names = [];
      
              $(el).find(".bsx").each((idx, elm) => {
                  names.push(
                    { 
                      title:$(elm).find(".tt").text(),
                      thumb:$(elm).find('img').attr().src,
                      slug:$(elm).find('a').attr("href").split(baseURI)[1]
                    });
          
              });
          
              jadwal[day] = names;  // Assign the names array to the corresponding day key
          
          });
            
       

            return res.status(200).json(jadwal);        
        }    
      return  res.status(500).json({ message: 'Something went wrong' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  
  export default getJadwalList;
 
 

 