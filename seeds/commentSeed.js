const { Comment } = require("../models");

const commentData = [
    {
        title: "Ducks",
        body: "Nice game, has anyone else eaten pasta lately?",
        level_id: 2,
        user_id: 1,
        commenter: "TheLegend27"
    },
    {
        title: "Ducks",
        body: "REEEEEEEEEEE impossible game WHO MADE THIS REEEE",
        level_id: 3,
        user_id: 2,
        commenter: "Platformer God"
    },
    {
        title: "Ducks",
        body: "Pasta just tastes so good.",
        level_id: 2,
        user_id: 1,
        commenter: "TheLegend27"
    },
    {
        title: "Ducks",
        body: "Lmao this is cool.",
        level_id: 2,
        user_id: 3,
        commenter: "Aurora32"
    },
]

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;