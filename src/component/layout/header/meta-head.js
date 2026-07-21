import Head from 'next/head';
 
function MetaHead({ title, description,slug,image}) {
 
  return (
    <>
    
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="Download Anime, Nonton Anime , Streaming Anime ,Tempat Download Anime, Anime Ongoing,Anime Batch" />
        <meta name="description" content={description} />
        <meta name="keywords" content={`Streaming ${title} Sub Indo, Download Anime ${title} Sub Indo , Download ${title} Sub Indo BD / Bluray , ${title} Subtitle Indonesia Batch ,${title} Sub Indo Mp4 dan Mkv , ${title} Sub Indo 480p , 720p , 360p , 240p , Download ${title} Sub Indo di Google Drive`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`https://www.tutturunime.my.id/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.tutturunime.my.id/${slug}`} />
        <meta property="og:site_name" content="TutturuNime" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:type" content="image/webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Page content */}
    </>
  );
}

export default MetaHead;
