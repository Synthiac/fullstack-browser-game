const router = require("express").Router();
const { User, Level, Comment } = require("../../models");


router.get("/", async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: ["id",
                "username",
                "email",
                "password"],

        })
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //all users
})

router.post("/", async (req, res) => {
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

router.post("/create", async (req, res) => {
    try {
        const createUser = await User.create(req.body)
        req.session.save(() => {
            req.session.user_id = createUser.id;
            req.session.username = createUser.username;
            req.session.loggedIn = true;

            res.json(createUser);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //add/create user
})


router.post("/", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            // end the session
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
//if we want logout functionality

router.get("/:id", async (req, res) => {
    try {
        const oneUser = await User.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "username", "email", "password"],
        })
        if (!oneUser) {
            res.status(404).json({ message: "No User found with this id" });
            return;
        }
        res.json(oneUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //get user by id
})

module.exports = router;