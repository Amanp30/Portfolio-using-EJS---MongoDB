const { StatusCodes } = require("http-status-codes");
const getMetaTags = require("../utilities/getMetaTags");
const baseUrl = require("../utilities/baseUrl");

const projectsPage = async (req, res, next) => {
  try {
    const metaData = getMetaTags(
      {
        title: "Projects",
        description: "See all projects built by Aman Pareek. ",
      },
      `${baseUrl(req)}/projects`
    );
    res.render("projects", { metaData });
  } catch (err) {
    const {
      status = StatusCodes.INTERNAL_SERVER_ERROR,
      message = "An error occurred while getting article",
    } = err;
    res.render("error", { code: status, message });
  }
};

module.exports = projectsPage;
