import AboutText from "@/lib/about-text"
import UsefulLink from "@/lib/useful-link"
import { ValueContext } from "@/pages/value-context"
import Link from "next/link"
import { useContext } from "react"

const Footer = () => {
  const  siteInfo   = useContext(ValueContext)
  const date = new Date()

    return(
    <footer className="border-y dark:border-0 px-3 md:px-10 py-6 font-roboto dark:bg-dark-gray dark:shadow">
        <section className="flex md:flex-row gap-5 flex-col justify-between items-start">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl font-mono dark:text-white" title={siteInfo?.menus?.menu?.siteName} >
              <a href="https://www.tutturunime.my.id/">{siteInfo?.menus?.menu?.siteName}</a>
            </h2>
            <AboutText />
            <p className="text-xs leading-6 tracking-wide dark:text-gray-100">
            © {date.getFullYear()} {siteInfo?.menus?.menu?.siteName}. 
            </p>
             <ul className="flex items-center gap-2">
             <li ><a href="https://web.facebook.com/tutturunime/"  target="_blank"  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <i class="fa fa-facebook" aria-hidden="true"></i>    
                </a></li>
                <li ><a href=" https://www.instagram.com/tutturunime/"  target="_blank"  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <i class="fa fa-instagram" aria-hidden="true"></i>    
                </a></li>
                <li className="pl-2">
             <Link href="/privacy-policy" className="px-2">
              <p className="text-sm dark:text-gray-100">Privacy Policy</p>
           </Link>
             </li>
             </ul>

             
            <p className="text-xs tracking-wide dark:text-gray-100">
            Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.
            </p>
          </div>

<UsefulLink />

        </section>
   </footer>
    )
}

export default Footer