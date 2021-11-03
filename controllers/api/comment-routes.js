const router = require("express").Router();
const { User, Level, Comment } = require("../../models");

//find all comments
router.get("/:id", async (req, res) => {
    try {
        const allComments = await Comment.findAll({
            attributes: ["id", "content", "user_id", "commenter"],
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["username"],
                },
            ],
        })
        res.json(allComments);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //comment by id test
})

// post comment
router.post("/", async (req, res) => {
    try {
        const createComment = await Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        })
        res.json(createComment)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.delete("/:id", async (req, res) => {
    //delete comment
    try {
        const deleteComment = await Comment.destroy({
            where: {
                //delete at given id
                //have to create button in js that deletes and call this route
                id: req.params.id,
            },
        })
        if (!deleteComment) {
            res.status(404).json({ message: "No Comment found with this id" });
            return;
        }
        res.json(deleteComment)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }

})


module.exports = router;