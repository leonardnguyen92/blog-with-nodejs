const siteRoute = require("../app/controllers/SiteController");
const newsRouter = require("../routes/news");
const coursesRouter = require("../routes/courses");
const meRouter = require("../routes/me");
const Course = require("../app/models/Course");

function route(app) {
    app.use("/courses", coursesRouter);
    app.use("/me", meRouter);
    app.use("/news", newsRouter);
    app.get("/", siteRoute.index);
}

module.exports = route;