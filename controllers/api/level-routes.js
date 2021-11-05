const router = require("express").Router();
const { User, Level, Comment } = require("../../models");


router.get("/:level_id", async (req, res) => {
    try {
        const commentLevel = await Comment.findAll({
            where: {
                level_id: req.params.level_id,
            },
            attributes: ["body", "commenter"],
        })
        if (!commentLevel) {
            res.status(404).json({ message: "No Comment found with this id" });
        }
        res.json(commentLevel)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;