import { ValueContext } from '@/pages/value-context';
import Head from 'next/head';
import { useContext } from 'react';
 
const OGPTags = () => {
    const {siteInfo} = useContext(ValueContext)
    const logo = "/img/logo2.png"
 
    return(
        <Head>
        <meta property="og:title" content={siteInfo?.menus?.globalSeo?.siteName} />
        <meta name="msvalidate.01" content="FC930EEBB3706E35CB20067F5F9C1B71" />
        <meta name="google-adsense-account" content="ca-pub-6330491343267680" /> 
        <meta name="yandex-verification" content="1d1a01511c38d45f" />
        <meta property="og:description" content="Tempat Nonton Anime Subtitle indonesia Dan Download Anime subtitle indonesia, dengan Format Mp4 dan MKV dan dalam Ukuran 480p, 720p, 360p, 240p dan BATCH." />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://www.tutturunime.my.id/" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Nonton Anime Subtitle Indonesia , Download Anime Sub Indo , Download Live Action Sub Indo , Anime Sub Indo , Anime 480p, 720p, 360p, Download Anime Batch Sub Indo , Download Anime Batch Sub Indo " />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteInfo?.menus?.globalSeo?.siteName} />
        <meta name="twitter:description" content="TutturuNime Nonton Anime Subtitle indonesia Dan Download Anime subtitle indonesia berbagai resolusi." />
        <meta name="twitter:image" content={logo } />
      </Head>
    )
}

export default OGPTags;
