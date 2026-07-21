import { useState } from "react"

const VideoTabs = ({anime,getVideoUrl}) => {
   const [currentTab,setCurrentTab] = useState()

   const openTab = (e) => {
    e.preventDefault()
    const data = e.currentTarget.dataset.tab
    setCurrentTab(data)
    console.log(data);
   }

const mirrorVideo = [anime.streaming1,anime.streaming2,anime.streaming3]
const key = ['360p','480p','720p']
 
const spacing = "sm:px-4 sm:py-2  px-2 py-1"
    return(
<div className="flex flex-col gap-5 ">
 
<div class="inline-flex rounded-md " role="group">
  <button type="button" data-tab='360p' class={`capitalize ${spacing} text-xs sm:text-sm font-medium text-gray-900 border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${currentTab === '360p' ? 'bg-slate-900 text-white' : ' bg-transparent'}`} onClick={openTab}>
     mirror 360p
  </button>
  <button type="button" data-tab='480p' class={`capitalize ${spacing} text-xs sm:text-sm  font-medium text-gray-900 border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 ${currentTab === '480p' ? 'bg-slate-900 text-white' : ' bg-transparent'}`} onClick={openTab}>
  mirror 480p
  </button>
  <button type="button" data-tab='720p' class={`capitalize ${spacing} text-xs sm:text-sm  font-medium text-gray-900  border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 ${currentTab === '720p' ? 'bg-slate-900 text-white' : ' bg-transparent'}`} onClick={openTab}>
  mirror 720p
  </button>
</div>

 {
    mirrorVideo?.map((mirror,index) => {
      const collapseKey = key[index];
      return (
        currentTab && currentTab === collapseKey && (
          <div
            key={index}
            data-collapse={collapseKey}
            className={
              currentTab === collapseKey
                ? "fade overflow-hidden transition-all duration-300 ease-in-out"
                : "h-0"
            }
          >
            <ul className="flex items-center flex-wrap gap-2 fade">
             {
              mirror.map(video => {
                return <button  type="button" className="capitalize text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded sm:rounded-lg text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" data-video={video.link} onClick={getVideoUrl} key={video.driver}>{video.driver}</button>
              })
             }
            </ul>
          </div>
        )
      );
    })
 }


</div>
    )
}

export default VideoTabs