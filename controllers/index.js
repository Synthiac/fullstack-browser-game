const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require("./api/user-routes")
const commentRoutes = require("./api/comment-routes")
const levelRoutes = require("./api/level-routes")


router.use('/', homeRoutes);
router.use("/api/users", userRoutes);
router.use("/api/comments", commentRoutes);
router.use("/api/levels", levelRoutes);



module.exports = router;
