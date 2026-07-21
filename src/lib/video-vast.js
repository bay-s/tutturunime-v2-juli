"use client"; // Wajib untuk Next.js App Router
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

// Import plugin pendukung (Hanya di client-side)
import 'videojs-contrib-ads';
import 'videojs-ima';
import 'videojs-ima/dist/videojs.ima.css';

const VastPlayer = ({ options, vastTagUrl }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Pastikan player hanya diinisialisasi sekali
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        // Konfigurasi IMA Plugin setelah player siap
        const imaOptions = {
          adTagUrl: vastTagUrl,
          showControlsForJSAds: true,
          debug: true ,// Matikan saat produksi
          id: 'content_video',
          class:"content_video"
        };
   
 
        // Inisialisasi plugin IMA
        player.ima(imaOptions);
      });

              // Pastikan plugin IMA tersedia sebelum dipanggil
 
    }

 
    // Cleanup saat komponen di-unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options, vastTagUrl]);


  
  return (
    <div data-vjs-player>
      <video id="vjs-big-play-centered"   ref={videoRef} className="video-js vjs-big-play-centered content_video" />
    </div>
  );
};

export default VastPlayer;
