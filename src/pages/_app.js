import '@/styles/globals.css'
import 'font-awesome/css/font-awesome.min.css';

import ValueProvider from './value-context'
import MainLayout from '@/component/layout/main-layout'
import ErrorBoundary from '@/component/error-boundaries';
import axios from 'axios';
import Head from 'next/head';
import { useEffect } from 'react';
import MyScript from '@/component/layout/header/script';
import { getJadwalList } from '@/lib/scrapper-jadwal';
 
export default function App({ Component, pageProps ,siteInfo}) {
  useEffect(() => {
    const audio = new Audio('/mp3/tutturu2.mp3');
    audio.play();
  });

  const logo = "/img/mayuri.png"
 
  return(
<ErrorBoundary>
<Head>
  <link rel="icon" href={logo}></link>
</Head>
<ValueProvider siteInfo={siteInfo}>
      <MainLayout>
           <Component {...pageProps} />
      </MainLayout>
<MyScript />
</ValueProvider>
</ErrorBoundary>
  )

}



App.getInitialProps = async () => {
  // const path = process.env.NEXT_PUBLIC_ABSOLUTE_PATH
  const jadwal = await getJadwalList()
  // const jadwal = await axios.get(`${path}/api/v1/jadwal`);
  // const jadwalFetch = await fetch(`${path}/api/v1/jadwal`, {
  //     next: { revalidate: 3600 }, // 1 jam cache
  //   })
  
 
  // console.log(jadwalFetch);
  // ,jadwal:jadwal?.data
  const menu = {
    siteName:"TutturuNime"
  }
  return {siteInfo : {menu  ,jadwal}  }
};
