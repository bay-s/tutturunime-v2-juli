import axios from "axios"
import * as cheerio from 'cheerio';

async function getGenreAnime(req, res) {
   const  genre = req.query.genre
   const  page = req.query.page
 
    if (req.method === 'GET') {
      try {
        const baseURI = process.env.NEXT_PUBLIC_BASE_URL
        let response = ""
        if(page === 1){
          response =  await axios(`${baseURI}/genres/${genre}`)
        }else{
          response = await axios(`${baseURI}/genres/${genre}/page/${page}`)
        }
        if(response.status === 200){
          const $ = cheerio.load(response.data);
          const page = $(`.postbody`)
          const pagin = $(".pagination")
          const genreAnime = []
          const paginationNumber = []
     
    
          page.find('.bsx').each((index,el) => {
            genreAnime.push(
              {
                title:$(el).find(".tt > h2").text(),
                status:$(el).find(".epx").text(),
                type:$(el).find(".typez").text(),
                thumb:$(el).find('img').attr().src,
                slug:$(el).find('a').attr("href").split(baseURI)[1]
              })
            })
         
            $(pagin).find(".page-numbers").each((i,el) => {
              const text = $(el).text().trim();
              if (/\d/.test(text)) {
                paginationNumber.push(text)
              }
             })

         const prev = $(pagin)?.find(".prev")?.attr("href")?.split("/")[6]
         const next = $(pagin)?.find(".next")?.attr("href")?.split("/")[6]
             const result = {
                      genreAnime,
                      pagination:{
                        prevUrl:!$(pagin).find(".prev").text() ? null : prev,
                        pageNumber:paginationNumber,
                        nextUrl:!$(pagin).find(".next").text() ? null : next
                      }
            }     

          return res.status(200).json(result);    
        } 
        return  res.status(500).json({ message: 'Something went wrongs' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrongs' });
      }
    }
  }
  
  export default getGenreAnime;
 
 
 