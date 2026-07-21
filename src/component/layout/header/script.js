
import Script from "next/script";
 

export default function MyScript() {
 
  return (
    <>
      {/* Tambah script eksternal */}
      <Script
          src="https://biodegradable-tune.com/bV3ZVO0ZP.3_pTvWbBmoV/JXZ/DN0/2/NZj/IVxIMRzogj0ALPTJYP2VMYjLErzoORDwUV"
          
        />
      <Script
          src="https://biodegradable-tune.com/djmfF/z.deGaNFvGZgGlUE/leqmD9yuIZkUHl/k/PUTxYe2_MSjzEUzANqzWIjtcNZj_YayaMQTdMD3/MFyxZismabWd1QpUdZD/0/xD"
           
        />

<Script type='text/javascript' src='//mapdevelopcleverness.com/d9/53/db/d953db47be8a799e8cbe343110f99daf.js' /> 
    {/* <Script
          src="https://fpyf8.com/88/tag.min.js"
          data-zone="166083" async data-cfasync="false"
        />
  */}

<Script id="adroll-init" strategy="afterInteractive">
        {`
          var adroll_adv_id = "IKHAWQHEXFE3JC5NRIBRH3";
          var adroll_pix_id = "4UUDGTNVVJEB7PISXIYHZR";
          var adroll_version = "2.0";

          (function(w, d, e, o, a) {
            w.__adroll_loaded = true;
            w.adroll = w.adroll || [];
            w.adroll.f = [ 'setProperties', 'identify', 'track', 'identify_email', 'get_cookie' ];
            var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js";
            for (a = 0; a < w.adroll.f.length; a++) {
              w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                return function() {
                  w.adroll.push([ n, arguments ])
                }
              })(w.adroll.f[a])
            }
            e = d.createElement('script');
            o = d.getElementsByTagName('script')[0];
            e.async = 1;
            e.src = roundtripUrl;
            o.parentNode.insertBefore(e, o);
          })(window, document);

          adroll.track("pageView");
        `}
      </Script>
    </>
  );
}
