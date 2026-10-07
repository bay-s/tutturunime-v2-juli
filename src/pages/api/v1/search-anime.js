import axios from "axios";
import * as cheerio from "cheerio";

const allowedOrigins = [
  "http://localhost:3000",
  "https://tutturunime.my.id",
];

async function getSearchAnime(req, res) {
  // =========================
  // CORS — must come FIRST, before any method check
  // =========================
  const origin = req.headers.origin;
  const allowedOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://tutturunime.my.id",
  ];   
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // =========================
  // Only allow GET
  // =========================
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const title = req.query.title;

  try {
    const baseURI = process.env.NEXT_PUBLIC_URL_OPLOVERZ;
    const response = await axios.get(`${baseURI}?s=${encodeURIComponent(title)}`);

    if (response.status === 200) {
      const $ = cheerio.load(response.data);
      const page = $(`.listupd`);
      const result = [];

      page.find(".bsx").each((index, el) => {
        result.push({
          title: $(el).find(".tt > h2").text(),
          type: $(el).find(".typez").text(),
          status: $(el).find(".epx").text(),
          thumb: $(el).find("img").attr("src"),
          slug: $(el).find("a").attr("href").split(baseURI)[1],
        });
      });

      return res.status(200).json(result);
    }

    return res.status(500).json({ message: "Something went wrong" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

export default getSearchAnime;   