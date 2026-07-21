import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"

const SinglePageTabs = ({currentTabs,openTabs,type}) => {
     const [tabs,setTabs] = useState(['link download','overview','character','staff'])
    const active = 'text-blue-400 dark:text-blue-400 border-blue-400'
 
    useEffect(() => {
      if(type === 'non-download'){
        setTabs(['overview','character','staff'])
      }else{
        setTabs(['link download','character','staff'])
      }
 
    },[])
 
    return(
<Fragment>
     
<div class="border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap" role="tablist">
    {
    tabs.map((tab, index) => {
        return <li class={`px-2 sm:px-4 pb-2 sm:pb-4 border-b-2 dark:text-white rounded-t-lg duration-200 hover:text-blue-500 hover:border-blue-400 dark:hover:text-blue-400 cursor-pointer  ${currentTabs === index ? active : ' border-transparent'}`} key={tabs[index]}  data-tabs={index} onClick={openTabs}>
        <button className={`capitalize text-xs sm:text-sm ${currentTabs === index ? 'text-blue-400' : ''}`} data-tabs={index} type="button" role="tab"  aria-selected="false" onClick={openTabs}>{tab}</button>
    </li>
    })
    }
    </ul>
</div>

</Fragment>
    )
}

export default SinglePageTabs


 

 