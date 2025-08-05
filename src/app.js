const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const { start } = require("repl");

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
    partialsDir: path.join(__dirname, "resources/views/partials"),
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    res.render("home", { tittle: "Trang chủ" });
});

app.get("/news", (req, res) => {
    res.render("news", { tittle: "Tin tức" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});