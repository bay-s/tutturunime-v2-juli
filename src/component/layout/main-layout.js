import Footer from "./footer"
import Header from "./header/header"
import { useRef, useState } from "react";
// import ModalSearchForm from "./modal-search-form";
import SidebarHidden from "./single-page/sidebar-hidden";
import ModalSearch from "./modal-search/modal-search";
 
const MainLayout = (props) => {
    const [open,setOpen] = useState(false)
    const [sidebarOpen,setSidebarOpen] = useState(false)
 
 
    const openSidebar = (e) => {
        e.preventDefault()
        setSidebarOpen(!sidebarOpen)
       e.stopPropagation();
    }
    
    const openSearchModal = (e) => {
      e.preventDefault()
      setOpen(!open)
    }
    return(
<div className='dark:bg-black 2xl:px-62 fade'>
<Header openModal={openSearchModal} openSidebar={openSidebar} />
{/* <main className="lg:container my-6 sm:my-4 px-2 md:px-6 lg:px-2 xl:px-8 mx-auto flex flex-col gap-12 min-h-screen font-roboto max-w-screen-lg lg:max-w-full" > */}
<main className="lg:container my-6 sm:my-4 px-2 md:px-6 lg:px-2 xl:px-8 mx-auto flex flex-col gap-12 min-h-screen font-roboto max-w-auto lg:max-w-[1280px] atau xl:max-w-[1366px]" >
{props.children}
</main>
{/* <ModalSearchForm open={open}  setOpen={setOpen} openModal={openModal} /> */}
<SidebarHidden sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
<ModalSearch openSearchModal={openSearchModal} isOpen={open} />
<Footer />
</div>
    )
}

export default MainLayout

