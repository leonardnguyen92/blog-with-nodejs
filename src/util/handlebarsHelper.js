const Handlebars = require("handlebars");

module.exports = {
    renderStars: function (rating) {
        const fullStars = Math.floor(rating);
        const halfStar = (rating - fullStars) >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        let result = "";

        for (let i = 0; i < fullStars; i++) {
            result += '<i class="fas fa-star" style="color: gold;"></i>';
        }

        if (halfStar) {
            result += '<i class="fas fa-star-half-alt" style="color: gold;"></i>';
        }

        for (let i = 0; i < emptyStars; i++) {
            result += '<i class="far fa-star" style="color: gold;"></i>';
        }

        return new Handlebars.SafeString(result);
    },
    convertNumberToMoney: function (number) {
        return Number(number).toLocaleString("vi-VN");
    },
    showLevel: function (level) {
        switch (level) {
            case "beginner":
                return "Trình độ cơ bản";
            case "intermediate":
                return "Trình độ trung cấp";
            case "advanced":
                return "Trình độ nâng cao";
            default:
                return "";
        }
    }
}