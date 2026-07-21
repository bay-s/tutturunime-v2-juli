import {
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
  } from "react-share";

const ShareButton = ({url,title}) => {
   const homeUrl =  process.env.NEXT_PUBLIC_ABSOLUTE_PATH
    return(
<ul className="lg:px-0 px-2 items-center flex flex-wrap gap-5 pt-8 border-b-2  pb-4 dark:border-slate-700">
 <li>
 <button type="button" class="text-slate-700 border border-slate-700 dark:border-gray-150 focus:outline-none font-medium rounded-sm text-sm sm:px-5 px-2 py-1 sm:py-2.5 text-center cursor-text flex items-center gap-4">
 <i class="fa fa-share-alt dark:text-gray-50" aria-hidden="true"></i>
  <span className="font-medium dark:text-gray-50">Share</span>
 </button>
 </li>
 
 <li>
 <TwitterShareButton url={`${homeUrl}${url}`} title={title}  hashtag={[`#${title}`]}>
    <div className="md:w-10 md:h-10 w-6 h-6">
    <TwitterIcon size={32}  className="w-full h-full"/>
    </div>
  </ TwitterShareButton> 
 </li>

 <li>
 <FacebookShareButton url={`${homeUrl}${url}`}  title={title}  hashtag={[`#${title}`]} >
 <div className="md:w-10 md:h-10 w-6 h-6">
    <FacebookIcon size={32}  className="w-full h-full"/>
    </div>
  </ FacebookShareButton> 
 </li>

 <li>
 <FacebookMessengerShareButton url={`${homeUrl}${url}`}  title={title} hashtag={[`#${title}`]} >
 <div className="md:w-10 md:h-10 w-6 h-6">
    <FacebookMessengerIcon size={32}  className="w-full h-full"/>
    </div>
  </FacebookMessengerShareButton> 
 </li>

 <li>
 <WhatsappShareButton url={`${homeUrl}${url}`}  title={title}  hashtag={[`#${title}`]} >
 <div className="md:w-10 md:h-10 w-6 h-6">
    <WhatsappIcon size={32}  className="w-full h-full"/>
    </div>
  </WhatsappShareButton> 
 </li>

</ul>
    )
}

export default ShareButton