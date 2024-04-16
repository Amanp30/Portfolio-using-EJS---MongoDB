const config = require("../config/config");

function getMetaTags(data, url) {
  const metaData = {
    title: data.title ?? config.WEBSITE_TITLE,
    ogImage: data.social_image ?? config.DEFAULT_OG_IMAGE_URL,
    url: url ?? config.WEBSITE_URL,
    description: data.description ?? config.DEFAULT_DESCRIPTION,
    favicon: process.env.FAVICON_URL ?? "/favicon.ico",
  };

  return metaData;
}
module.exports = getMetaTags;
