"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function VideoPlayer({video}) {
  const videoRef = useRef(null);
  const adContainerRef = useRef(null);
  const adsLoaderRef = useRef(null);
  const adsManagerRef = useRef(null);

  const [showAds, setShowAds] = useState(true);

  useEffect(() => {
    if (!window.google || !window.google.ima) return;

    const videoElement = videoRef.current;
    const adDisplayContainer = new window.google.ima.AdDisplayContainer(
      adContainerRef.current,
      videoElement
    );
    console.log("test ads");
    const adsLoader = new window.google.ima.AdsLoader(adDisplayContainer);
    adsLoaderRef.current = adsLoader;
 
    // Listener kalau Ads berhasil dimuat
    adsLoader.addEventListener(
      window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      (e) => {
        const adsManager = e.getAdsManager(videoElement);
        adsManagerRef.current = adsManager;

        try {
          setShowAds(true); // tampilkan adContainer
          adsManager.init(
            videoElement.offsetWidth,
            videoElement.offsetHeight,
            window.google.ima.ViewMode.NORMAL
          );
          adsManager.start();
 
          // Kalau iklan selesai, sembunyikan adContainer
          adsManager.addEventListener(
            window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
            () => {
              setShowAds(false);
              videoElement.play();
            }
          );
        } catch (err) {
          console.error("AdsManager error:", err);
          setShowAds(false);
          videoElement.play();
        }
      },
      false
    );

    // Listener kalau Ads error
    adsLoader.addEventListener(
      window.google.ima.AdErrorEvent.Type.AD_ERROR,
      (e) => {
        console.error("Ad error:", e.getError());
        setShowAds(false);
        videoElement.play();
      }
    );

    // Request Ads
    const adsRequest = new window.google.ima.AdsRequest();
    adsRequest.adTagUrl =
      "https://creamymouth.com/dgm.FOz/dsGsNFvPZZGQUi/CeUm/9NujZFUFlgkxPlTsY/3-Nhjek/5/NwjNk/tmNcjzc/2rOSTTk/3lMJyrZPsSaRWR1Up/djDv0cxH";

    adsRequest.linearAdSlotWidth = videoElement.offsetWidth;
    adsRequest.linearAdSlotHeight = videoElement.offsetHeight;

    // ⚠️ harus dipicu user interaction, misalnya tombol Play
    const initAds = () => {
      adDisplayContainer.initialize();
      adsLoader.requestAds(adsRequest);
    };

    videoElement.addEventListener("play", initAds, { once: true });
  }, []);
 
  return (
    <div className="aspect-video w-full rounded-md">
     {/* Load IMA SDK */}
     <script
          async
          src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"
          strategy="afterInteractive"
        />
      <div className="z-0  " ref={adContainerRef}>
         
      </div>

      {/* {showAds ? (
          <video
     ref={videoRef}
     className="w-full z-0"
     controls
     playsInline
     preload="auto"
     src="/mp3/blank.mp4"
          />
    
      ) : (
        <iframe src={video.videoUrl} ref={video.video} className={`w-full h-full   rounded-md z-100`} frameBorder="0" width="420" height="370" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
      )} */}
    </div>
  );
}
