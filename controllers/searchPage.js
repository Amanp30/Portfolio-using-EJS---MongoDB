const config = require("../config/config");
const addFormattedDate = require("../utilities/addFormattedDate");
const baseUrl = require("../utilities/baseUrl");
const getMetaTags = require("../utilities/getMetaTags");
const getResponse = require("../utilities/getResponse");
const { StatusCodes } = require("http-status-codes");

const searchPage = async (req, res, next) => {
  try {
    if (!req.query.q) {
      throw new Error("Search term is missing");
    }

    const searchTerm = encodeURIComponent(req.query.q);
    const username = config.USERNAME;

    const apiUrl = `https://dev.to/api/articles?username=${username}&q=${searchTerm}`;
    const data = await getResponse(apiUrl);

    const articles = data.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    addFormattedDate(articles);

    const metaData = getMetaTags(
      {
        title: "Search - Aman Pareek",
        description: "Aman Pareek search page. ",
      },
      `${baseUrl(req)}/search`
    );

    res.render("search", { searchTerm, articles, metaData });
  } catch (err) {
    const errorMessage =
      err.message || "An error occurred while searching articles";
    res.render("error", { code: StatusCodes.CONFLICT, message: errorMessage });
  }
};

module.exports = searchPage;
