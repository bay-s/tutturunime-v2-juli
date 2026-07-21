import Head from "next/head"
import Link from "next/link"
import { Fragment, useContext } from "react"
 
import Image from "next/image"
import { NextSeo } from "next-seo"
import { ValueContext } from "./value-context"
 
const PageNotFound = () => {
const  siteInfo   = useContext(ValueContext)
const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
  const img = '/img/HD-wallpaper-anime-error-female-dress-black-cute-hair-windows-girl-anime-page.jpg'
    return(
<Fragment>
<NextSeo
       title={`404 Page not found - ${siteInfo?.menus?.globalSeo?.siteName}`}
       description={`Download dan nonton anime Hanya di ${siteInfo?.menus?.globalSeo?.siteName}`}
        openGraph={{
          type: 'website',
          url: `${path}/404`,
          title:`404 Page not Found - ${siteInfo?.menus?.globalSeo?.siteName}`,
          description:`Download dan nonton anime Hanya di ${siteInfo?.menus?.globalSeo?.siteName}`,
          images: [
            {
              url:img ,
              width: 1200,
              height: 630,
              alt: 'Featured image',
            },
          ],
          site_name:siteInfo?.menus?.globalSeo?.siteName,
        }}
/>
  <section class=" flex items-center px-6   mx-auto ">
   
        <div class="flex flex-col items-center max-w-sm mx-auto text-center my-auto">
            <Image 
            src={img}
            loader={() => img}
            width={100}
            height={100}
            alt="PAGE NOT FOUND"
            className="object-cover w-96"
            />
 
            <h1 class="mt-3 text-2xl font-bold text-gray-800 dark:text-white md:text-5xl">Page not found</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">
              Halaman yang anda cari tidak di temukan.
            </p>

            <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <Link href='/' class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Kembali</span>
                </Link>
            </div>
        </div>
 
</section>
</Fragment>
    )
}

export default PageNotFound