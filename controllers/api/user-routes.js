const router = require("express").Router();
const { User, Level, Comment } = require("../../models");

router.post("/login", async (req, res) => {
    try {
        const loginUser = await User.findOne({
            where: {
                username: req.body.username,
            },
        })
        if (!loginUser) {
            res.status(400).json({ message: "User not found" });
            return;
        }
        const validPassword = loginUser.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: "Incorrect Password!" });
            return;
        }
        req.session.save(() => {
            //declare session variables
            req.session.user_id = loginUser.id;
            req.session.username = loginUser.username;
            req.session.loggedIn = true;
            //send response
            res.json({ user: loginUser, message: "You are now logged in!" });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //login user
})
//if we want logout functionality
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            // end the session
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;