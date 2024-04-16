const createHttpError = require("http-errors");

exports.NotFoundHandler = (req, res, next) => {
  next(createHttpError.NotFound("Not found"));
};
