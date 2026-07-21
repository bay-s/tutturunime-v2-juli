import { episodeHelper } from "./episode-helper";
import * as cheerio from 'cheerio';

async function getEmbedByContent(req, res){
    try {
        let nonce = await episodeHelper.getNonce();
        let content = req.query.content 
        const html_streaming = await episodeHelper.getUrlAjax(content, nonce)
        console.log(html_streaming);
        const parse = cheerio.load(html_streaming)
        const link = parse('iframe').attr('src')
        const obj = {};
        obj.streaming_url = link

        res.send(obj);
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

export default  getEmbedByContent