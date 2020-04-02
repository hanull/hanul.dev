module.exports = {
  title: `HANUL's BLOG`,
  description: `개발노트`,
  author: `HANUL`,
  introduction: `Slow and steady wins the race`,
  siteUrl: `https://hanul-dev.netlify.com`, // Your blog site url
  sitemapPath: `https://hanul-dev.netlify.com/sitemap.xml`,
  robotsPolicy: [{ userAgent: '*', allow: '/' }],
  social: {
    twitter: ``, // Your Twitter account
    github: `hanull`, // Your GitHub account
    medium: ``, // Your Medium account
    facebook: ``, // Your Facebook account
    til:`hanullearned`,
  },
  icon: `content/assets/felog.png`, // Add your favicon
  keywords: [`blog`],
  comment: {
    disqusShortName: 'hanul', // Your disqus-short-name. check disqus.com.
    utterances: 'hanull/hanul.dev', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 10, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: 'hanul',
  },
  share: {
    facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
  },
  ga: 'UA-162506382-1', // Add your google analytics tranking ID
}
