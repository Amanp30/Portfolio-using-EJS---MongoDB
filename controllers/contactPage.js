const { StatusCodes } = require("http-status-codes");
const getMetaTags = require("../utilities/getMetaTags");
const baseUrl = require("../utilities/baseUrl");

const contactPage = async (req, res, next) => {
  try {
    const metaData = getMetaTags(
      {
        title: "Contact Me",
        description: "Contact Aman Pareek. ",
      },
      `${baseUrl(req)}/contact`
    );

    res.render("contact", { metaData });
  } catch (err) {
    const {
      status = StatusCodes.INTERNAL_SERVER_ERROR,
      message = "An error occurred while getting article",
    } = err;
    res.render("error", { code: status, message });
  }
};

module.exports = contactPage;
