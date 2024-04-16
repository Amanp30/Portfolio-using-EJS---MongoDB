const { client } = require("./collections");

function connectDb() {
  return new Promise(async (resolve, reject) => {
    try {
      await client.connect();
      console.log("You successfully connected to MongoDB!");

      resolve(true);
    } catch (err) {
      reject(err);
    }

    // finally {
    //   await client.close();
    // }
  });
}

module.exports = connectDb;
