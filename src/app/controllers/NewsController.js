
class NewsController {
    //GET /news
    index(req, resp) {
        resp.render("news", { title: "Tin tức" });
    }

    //GET /:slug
    show(req, resp) {
        resp.send("NEW DETAIL!!!");
    }
}

module.exports = new NewsController;