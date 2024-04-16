const { StatusCodes } = require("http-status-codes");
const getMetaTags = require("../utilities/getMetaTags");
const baseUrl = require("../utilities/baseUrl");

const aboutPage = async (req, res, next) => {
  try {
    const metaData = getMetaTags(
      {
        title: "About - Aman Pareek",
        description: "Aman Pareek about page. ",
      },
      `${baseUrl(req)}/about`
    );
    res.render("about", { metaData });
  } catch (err) {
    const {
      status = StatusCodes.INTERNAL_SERVER_ERROR,
      message = "An error occurred while getting article",
    } = err;
    res.render("error", { code: status, message });
  }
};

module.exports = aboutPage;
