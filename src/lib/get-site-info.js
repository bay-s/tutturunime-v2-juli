import { gql } from "@apollo/client";


// export const GET_SITE_INFO = gql`
// query GetSiteMetadata {
//     getHeader {
//         siteTitle
//         siteTagLine
//         siteLogoUrl
//         favicon
//       }
//       getFooter {
//         copyrightText
//         sidebarOne
//         sidebarTwo
//         socialLinks {
//           iconUrl
//           iconName
//         }
//       }
//       menus(where: {location: PRIMARY}) {
//         nodes {
//           name
//           menuItems {
//             nodes {
//               label
//               path
//             }
//           }
//         }
//       }
// }
// `

 
export const GET_SITE_INFO = `
query MyQuery {
    _site {
      globalSeo {
        siteName
        titleSuffix
      }
      favicon {
        url
      }
      faviconMetaTags {
        content
        tag
        attributes
      }
    }
  }
`