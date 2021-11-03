const router = require('express').Router();
const path = require('path');
const { User, Level, Comment } = require("../models");

router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

//get all comments for main page. Can make api call in js to retrive this info
router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            attributes: ["id", "title", "body", "user_id"],
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["username"],
                },
            ],
        })
        if (!commentData) {
            res.status(400).json({ message: "No Posts Available" });
            return;
        }
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        // console.log(comments);
        // Call this data on main page under game. Will have to use js to incorporate a call to this api.

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;