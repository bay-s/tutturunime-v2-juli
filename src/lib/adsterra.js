// components/AdsterraAd.js
import { useEffect, useRef } from 'react';

const AdsterraAd = () => {
  const banner = useRef(null);
 const banner2 = useRef(null)
 const banner3 = useRef(null)

  const atOptions = {

      'key' : '8449b070c9324fd08cd9eb0a1ce92cc1',
  'format' : 'iframe',
  'height' : 250,
  'width' : 160,
  'params' : {}
  }

useEffect(() => {
  if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement('script')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.profitablecreativeformat.com/8449b070c9324fd08cd9eb0a1ce92cc1/invoke.js`
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

      banner.current.append(conf)
      banner.current.append(script)
  }

  if (banner2.current && !banner2.current.firstChild) {
    const s = document.createElement("script");
    s.src = "//agreeableoccasion.com/bAXyV.sTdFG_lv0ZYtWmct/oebm/9/u/ZhUklrklPxTxYC2bMxj/EG0-OhDdUQtzNTjcYnynMHTdQQ4cNXgn";
    s.async = true;
   s.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`
    s.referrerPolicy = "no-referrer-when-downgrade";
    document.body.appendChild(s);
  
   banner2.current.append(s)
  } 

//   const s = document.createElement("script");
//   s.src = "\/\/agreeableoccasion.com\/byXcVBsqd.Gmlw0HYpWncq\/uerm\/9Gu\/Z\/UGlOk\/PLTtYT2PMRjeY\/4AOoTjgbtZNHjeYDyBNljvg-5dOGQV";
//   s.async = true;
//  s.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`
//   s.referrerPolicy = "no-referrer-when-downgrade";
//   document.body.appendChild(s);

//   banner3.current.append(s)

}, [banner])

 
return (
<div className='flex gap-2 flex-col'>
<div id="adsterra-container" ref={banner}></div>
<div id="adsterra-container2" className=' ' ref={banner2}></div>
{/* <div id="adsterra-container3" className=' ' ref={banner3}></div> */}
</div>
);
};

export default AdsterraAd;
