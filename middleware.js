// middleware.js
export function corsMiddleware(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://tutturus.netlify.app/'); // Adjust origin based on your needs
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // Adjust methods if needed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Adjust headers if needed
    res.setHeader('Access-Control-Allow-Credentials', true); // Adjust if credentials needed
  
    next();
  }
  
  // In your API route (getGenreList.js)
  // import corsMiddleware from './middleware';
  
  export default async function getGenreList(req, res) {
    // ... your existing logic for fetching and processing data ...
  
    res.status(200).json(genre);
  }
  
  export const config = {
    api: {
      bodyParser: false, // Disables body parsing for middleware
    },
  };