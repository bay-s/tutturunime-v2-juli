import AnimeCard from "../post/anime-card";
import { useEffect, useState } from "react";
import LoaderCard from "../post/loader-card";
import HomepageTitle from "./homepage-title";
import Link from "next/link";

const HomePage = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="col-span-4 lg:col-span-3 flex flex-col gap-14 font-roboto">
   <HomepageTitle title="Ongoing Stream" path="/ongoing/page/2" link={`data?.ongoing.pagination`}>
        {data?.ongoing.slice(1, 11).map((item) => {
          return isLoading ? (
            <LoaderCard />
          ) : (
            <AnimeCard anime={item} type="ongoing" slugType="original" key={item.title} />
          );
        })}
      </HomepageTitle>
 
      <HomepageTitle title="Ongoing Download" path="/ongoing" link={data?.ongoing.pagination}>
        {data?.oploverz?.map((item) => {
          return isLoading ? (
            <LoaderCard />
          ) : (
            <AnimeCard anime={item} type={item.type} slugType="oploverz" key={item.title} source="oploverz" />
          );
        })}
     
      </HomepageTitle>

     <div className="flex items-center gap-4 mx-auto justify-center">
      {data?.pagination?.pagin.map(link => {
        return <Link key={Link?.name} href={`/${link?.slug}`} className='group focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-all duration-150'>
        <span className="group-hover:-translate-x-1.5  inline-block">{link?.name}</span>
        <span className='font-bold px-2 text-md text-md'>
        <i class="fa fa-long-arrow-right group-hover:translate-x-1.5" aria-hidden="true"></i>
        </span>
        </Link>
      })}
     </div>

     <HomepageTitle title="Rekomendasi" path="/completed">
        {data?.rekomen.map((item) => {
          return isLoading ? (
            <LoaderCard />
          ) : (
            <AnimeCard anime={item} type="completed" slugType="oploverz" key={item.title} />
          );
        })}
      </HomepageTitle>
    </div>
  );
};

export default HomePage;
