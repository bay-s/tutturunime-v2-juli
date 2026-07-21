import axios from "axios";
import { getServerSideSitemapLegacy } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
    const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH;
    const baseUrl = "https://www.tutturunime.my.id"; // Fix typo here

    const animeOngoing = await axios.get(`${path}/api/v1/ongoing?page=1`);

    const ongoingUrls = animeOngoing?.data?.ongoing?.map((anime) => {
        return {
            url: `${baseUrl}/${anime.slug}`,
            lastModified: new Date(), // Make sure you have the correct lastModified date
        };
    }) ?? [];

    const genreList = await axios.get(`${path}/api/v1/genre-list`);
    const genreUrls = genreList?.data?.map((genre) => {
        return {
            url: `${baseUrl}${genre.slug}`,
            lastModified: new Date(),
        };
    }) ?? [];

    const ongoing = {
        url: `${baseUrl}/ongoing`,
        lastModified: new Date(),
    };

    const completed = {
        url: `${baseUrl}/completed`,
        lastModified: new Date(),
    };

    const urls = [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        ...ongoingUrls,
        ...genreUrls,
        ongoing,
        completed,
    ];

    return getServerSideSitemapLegacy(ctx, urls);
}

// Default export to prevent next.js errors
export default function Sitemap() {}
