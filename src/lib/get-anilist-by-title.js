import axios from "axios";
import { GET_ANIME_BY_TITLE } from "./query-single-anime";

export const getAnilistByTitle = async (title) => {
    var variables = {
        searchTerm:title
     };
     try{
        const aniList = await axios.post('https://graphql.anilist.co', {
            query: GET_ANIME_BY_TITLE,
            variables: variables
          });
        if(aniList.status === 200){
          return aniList
        }
        return {error:true,message:"Something wrong"}
    }catch(error){
        return {error:true,message:error}
    }

}