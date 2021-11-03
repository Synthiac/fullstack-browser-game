const { Comment } = require("../models");

const commentData= [
    {
        content: "Nice game, has anyone else eaten pasta lately?",
        level_id: 2,
        user_id: 1,
        commenter: "TheLegend27"
    },
    {
        content: "REEEEEEEEEEE impossible game WHO MADE THIS REEEE",
        level_id: 3,
        user_id: 2,
        commenter: "Platformer God"
    },
    {
        content: "Pasta just tastes so good.",
        level_id: 2,
        user_id: 1,
        commenter: "TheLegend27"
    },
    {
        content: "Lmao this is cool.",
        level_id: 2,
        user_id: 3,
        commenter: "Aurora32"
    },
]

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;