const dotenv = require("dotenv");
dotenv.config();

const config = {
  WEBSITE_URL: process.env.WEBSITE_URL,
  PORT: process.env.PORT ?? 9000,
  USERNAME: process.env.DEVTO_USERNAME ?? "amanp30",
  MONGO_URI: process.env.MONGO_URI ?? "mongodb://127.0.0.1:27017",
  WEBSITE_TITLE: process.env.WEBSITE_TITLE ?? "Website Title",
  DEFAULT_OG_IMAGE_URL: `${process.env.WEBSITE_URL}/default_og.png`, // Corrected
  DEFAULT_DESCRIPTION: `Welcome to website ${process.env.WEBSITE_URL}`,
};

Object.freeze(config);

module.exports = config;
