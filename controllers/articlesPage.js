const config = require("../config/config");
const addFormattedDate = require("../utilities/addFormattedDate");
const baseUrl = require("../utilities/baseUrl");
const getMetaTags = require("../utilities/getMetaTags");
const getResponse = require("../utilities/getResponse");
const { StatusCodes } = require("http-status-codes");

const allArticlePage = async (req, res, next) => {
  try {
    const data = await getResponse(
      `https://dev.to/api/articles?username=${config.USERNAME}`
    );

    addFormattedDate(data);

    const metaData = getMetaTags(
      {
        title: "Articles",
        description:
          "Explore coding articles for insights, tips, and tutorials. Elevate your skills and stay updated with the latest trends.",
      },
      `${baseUrl(req)}/articles`
    );

    res.render("articles", { data, metaData });
  } catch (err) {
    const {
      status = StatusCodes.INTERNAL_SERVER_ERROR,
      message = "An error occurred while getting articles",
    } = err;
    res.render("error", { code: status, message });
  }
};

module.exports = allArticlePage;
