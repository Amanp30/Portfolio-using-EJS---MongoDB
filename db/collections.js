const { MongoClient, ServerApiVersion } = require("mongodb");
const config = require("../config/config");

const client = new MongoClient(config.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("words");
const UserCollection = db.collection("User");
const ContactCollection = db.collection("Contact");

module.exports = { client, UserCollection, ContactCollection };
