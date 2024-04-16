const formatDate = require("./formatDate");

function addFormattedDate(data) {
  data.forEach((d) => {
    d.formatted_published = formatDate(d.published_timestamp);
    d.formatted_updated = formatDate(d.edited_at);
    d.isUpdated = new Date(d.edited_at) > new Date(d.published_timestamp);
  });
}

module.exports = addFormattedDate;
