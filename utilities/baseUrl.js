function baseUrl(req) {
  return req.protocol + "://" + req.get("host");
}

module.exports = baseUrl;
