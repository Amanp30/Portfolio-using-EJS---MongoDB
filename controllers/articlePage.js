const config = require("../config/config");
const baseUrl = require("../utilities/baseUrl");
const formatDate = require("../utilities/formatDate");
const getMetaTags = require("../utilities/getMetaTags");
const getResponse = require("../utilities/getResponse");
const { StatusCodes } = require("http-status-codes");

const articlePage = async (req, res, next) => {
  try {
    const [data, comments] = await getArticleData(
      config.USERNAME,
      req.params.slug
    );

    data.formatted_published = formatDate(data.published_timestamp);

    const metaData = getMetaTags(data, `${baseUrl(req)}/article/${data.slug}`);

    res.render("article", { data, comments, metaData });
  } catch (err) {
    const {
      status = StatusCodes.INTERNAL_SERVER_ERROR,
      message = "An error occurred while getting article",
    } = err;
    res.render("error", { code: status, message });
  }
};

const getArticleData = async (user, slug) => {
  const articleResponse = await getResponse(
    `https://dev.to/api/articles/${user}/${slug}`
  );
  const commentsResponse = await getResponse(
    `https://dev.to/api/comments?a_id=${articleResponse.id}`
  );
  return [articleResponse, commentsResponse];
};

module.exports = articlePage;
