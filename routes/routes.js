// routes.js

const express = require("express");
const searchPage = require("../controllers/searchPage");
const submitContactForm = require("../controllers/submitContactForm");
const articlePage = require("../controllers/articlePage");
const allArticlePage = require("../controllers/articlesPage");
const sitemapPage = require("../controllers/sitemapPage");
const homePage = require("../controllers/homePage");
const contactPage = require("../controllers/contactPage");
const aboutPage = require("../controllers/aboutPage");
const projectsPage = require("../controllers/projectsPage");
const router = express.Router();

router.get("/sitemap.xml", sitemapPage);

// Define your routes
router.get("/", homePage);
router.get("/contact", contactPage);
router.get("/about", aboutPage);
router.get("/projects", projectsPage);

router.get("/search", searchPage);
router.get("/articles", allArticlePage);
router.get("/article/:slug", articlePage);

router.post("/submit-form", submitContactForm);

module.exports = router;
