import axios from "axios"
import * as cheerio from 'cheerio';

async function getBatchAnime(req, res) {
  const page = req.query.page
 
    if (req.method === 'GET') {
      try {
 
        const baseURI = process.env.NEXT_PUBLIC_BASE_URL
       let response = ""
        if(page === 1){
          response = await axios(`${baseURI}/complete-anime/`)
        }else{
          response = await axios(`${baseURI}/complete-anime/page/${page}`)
        }
        if(response.status === 200){
          const $ = cheerio.load(response.data);
          const page = $(`.rapi`)
          const pagination = $(".pagination")
          const batch = []
          const paginationNumber = []
          let totalPages = 0

          $(page).find('.venz > ul > li').each((i,el) => {
            batch.push({
              title:$(el).find('.jdlflm').text().trim(),
              totalEpisode:$(el).find('.epz').text().trim(),
              date:$(el).find('.newnime').text().trim(),
              rating:$(el).find('.epztipe').text().trim(),
              thumb:$(el).find('img').attr('src'),
              slug:$(el).find('a').attr('href').split(baseURI)[1],
            })
            totalPages = parseInt($(pagination).find('.pagenavix a:nth-last-child(2)').text())
          })

          $(pagination).find(".page-numbers").each((i,el) => {
            const text = $(el).text().trim();
            if (/\d/.test(text)) {
              paginationNumber.push(text)
            }
           })

          const result = {
            batch,
            totalPages,
            pagination:{
              prevUrl:!$(pagination).find(".prev").text() ? null : $(pagination).find(".prev").attr("href").split("/")[5],
              pageNumber:paginationNumber,
              nextUrl:!$(pagination).find(".next").text() ? null : $(pagination).find(".next").attr("href").split("/")[5]
            },
          }
         return  res.status(200).json(result);    
        }   
 
   return res.status(500).json({ message: 'Something went wrong' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  
  export default getBatchAnime;
 
 