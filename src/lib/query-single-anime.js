import { gql } from "@apollo/client";

export const GET_ANIME_BY_TITLE = `
query   ($searchTerm: String!) { # Define which variables will be used in the query (id)
    Media (search: $searchTerm, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
      id
      characters {
        edges {
     voiceActors {
        id
         name {
            first
            middle
             last
            full
            native
           userPreferred
              }
            languageV2
            image {
              large
              medium
            }
          }
          node {
            id

            name {
              first
              last
              full
            }
            image {
              large
              medium
            }
        
          }
          role 
        }
      }  
      staff {
        edges {
          id
          node{
            image {
              large
              medium
            }
            name {
              first
              middle
              last
              full
              native
              userPreferred
            }
            languageV2
          }
          role
        }
      }
      title {
        romaji
        english
        native
      }
      coverImage {
        large
        medium
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      studios {
        edges {
          id
          isMain
          node {
            id
            name
          }
        }
      }
      averageScore
      meanScore
      synonyms
      seasonYear
      season
      duration
      bannerImage
      format
      popularity 
      status
      episodes
      description
      genres
    }
  }
`;

 
 