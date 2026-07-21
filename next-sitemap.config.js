const SITE_URL = process.env.NEXT_PUBLIC_ABSOLUTE_PATH || 'https://www.tutturunime.my.id';
 
const NEXT_SSG_FILES = [
  // '/*.json$',
  // '/*_buildManifest.js$',
  // '/*_middlewareManifest.js$',
  // '/*_ssgManifest.js$',
   "/pages/api/"
];
 
const exclude = [
  '/api*',
  '/api/v1*'
];

/** @type {import('next-sitemap').IConfig} */
// extend the configuration
const config = {
  exclude,
  siteUrl: SITE_URL,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        userAgent: 'Googlebot',
        allow:'/',
        disallow:NEXT_SSG_FILES,
      },
    ],
    additionalSitemaps: [
      'https://www.tutturunime.my.id/server-sitemap-index.xml', // <==== Add here
    ],
  },
 
};

module.exports = config