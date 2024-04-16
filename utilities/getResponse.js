const axios = require("axios");

async function getResponse(url) {
  try {
    const response = await axios.get(url);

    const data = response.data;

    return data;
  } catch (error) {
    const errMsg = error.response.data.error;
    const status = error.response.data.status;
    console.error(`Error fetching url ${url}`, error);
    throw { message: errMsg, status };
  }
}

module.exports = getResponse;
