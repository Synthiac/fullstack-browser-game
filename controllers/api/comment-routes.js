const router = require("express").Router();
const { User, Level, Comment } = require("../../models");


router.get("/", async (req, res) => {
    try {
        const allComments = await Comment.findAll({
            attributes: ["id", "body", "commenter"],
        })
        res.json(allComments);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //get all posts
})

//find comment by id 
router.get("/:id", async (req, res) => {
    try {
        const oneComment = await Comment.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "body", "commenter"],
        })
        console.log(oneComment)
        res.json(oneComment);
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
            // title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id,
            commenter: req.session.username,
        })
        res.json(createComment);
        console.log(createComment);
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