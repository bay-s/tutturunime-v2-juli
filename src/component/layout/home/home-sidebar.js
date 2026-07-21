import FacebookPlugin from "@/lib/facebook-plugin"
import AdsterraAd from "@/lib/adsterra"
import ChatangoChat from "@/lib/chatango"
import Trakteer from "@/lib/trakteer"
import { ValueContext } from "@/pages/value-context"
import { useContext } from "react"
import JadwalSidebar from "../single-page/jadwal-sidebar"
import Iklan from "@/lib/iklan"


const HomeSidebar = () => {
    const  siteInfo   = useContext(ValueContext)
    const jadwal = siteInfo?.menus?.jadwal
    return(
        <aside className='col-span-4 lg:col-span-1 flex flex-col gap-4 lg:pl-6 pl-0' >
        <Iklan />
        <FacebookPlugin />
        <Trakteer />
         <div className="dark:bg-dark-gray shadow-lg bg-gray-100 dark:shadow rounded-md flex items-center p-3">
         <ChatangoChat />
         </div>
         <JadwalSidebar jadwal={jadwal}/>
          <AdsterraAd />
        </aside>
    )
}

export default HomeSidebar