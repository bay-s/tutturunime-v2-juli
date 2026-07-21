import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
<Html lang="en-ID"  >
  <Head>

  <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5TJPLS5Z');
              `,
            }}
          />


     {/* <!-- Google tag (gtag.js) my.id --> */}     
{/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-06PQQDD65L"></Script>
<Script strategy="afterInteractive" id='ga2-google-script'>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-06PQQDD65L');
  `}
</Script> */}


{/* <!-- Google tag (gtag.js) web.id --> */}
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-NJSET8BDQP"></Script>
<Script strategy="afterInteractive" id='ga2-google-script'>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-06PQQDD65L');
  `}
</Script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6330491343267680"></script>
  </Head>
      <body>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TJPLS5Z"
 ></iframe>
 </noscript>
  <Main />
<NextScript />
        
      </body>
    </Html>
  )
}
