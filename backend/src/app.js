const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const app = express();
const path = require("path");
const helpers = require("./util/handlebarsHelper");
const route = require("./routes/index")

// const { start } = require("repl");
const db = require("./config/db");

// Connect to db
db.connectDB();

const port = 3000;

//HTTP logger
app.use(morgan("combined"));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//use static file
app.use(express.static(path.join(__dirname, "public")));

//Template engine
const hbs = exphbs.create({
    extname: ".hbs",
    partialsDir: path.join(__dirname, "resources", "views", "partials"),
    // Register helper before setting view engine or rendering views
    helpers: helpers,
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

module.exports = app;