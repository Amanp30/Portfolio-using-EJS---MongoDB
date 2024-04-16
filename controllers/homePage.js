const { StatusCodes } = require("http-status-codes");
const getMetaTags = require("../utilities/getMetaTags");
const baseUrl = require("../utilities/baseUrl");

const homePage = async (req, res, next) => {
  try {
    const metaData = getMetaTags(
      {
        title: "Aman Pareek",
        description:
          "Aman Pareek is a passionate full stack developer. Know more about him. ",
      },
      `${baseUrl(req)}`
    );
    res.render("index", { metaData });
  } catch (err) {
    const {
      status = StatusCodes.INTERNAL_SERVER_ERROR,
      message = "An error occurred while getting article",
    } = err;
    res.render("error", { code: status, message });
  }
};

module.exports = homePage;
