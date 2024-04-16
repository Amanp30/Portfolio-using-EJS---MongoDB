const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const connectDb = require("./db");
const { corsOptions, crossOriginResourceSharing } = require("./utilities/cors");

const config = require("./config/config");
const appRoutes = require("./routes/routes");

const app = express();

app.use(crossOriginResourceSharing);
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

function startServer() {
  app.listen(config.PORT, function () {
    console.log("Server running on " + config.PORT);
  });
}

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));

app.use("/", appRoutes);

app.use("*", (req, res, next) => {
  res.render("error", { code: 404, message: "Page Does not exists" });
});

connectDb()
  .then(async () => {
    startServer();
  })
  .catch((err) => {
    console.log(
      "Some error occurred in connecting with database and server not running"
    );
    console.log(err);
  });
