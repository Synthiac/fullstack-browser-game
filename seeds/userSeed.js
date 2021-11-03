const { User } = require("../models");

const userData = [
    {
        id: 1,
        username: "TheLegend27",
        email: "TheLegend27@gmail.com",
        password: "$2b$10$c6jSS/0mdN1zanqQK0M2bOV9xPrG7eedR7i2a.fUT6b1yn9YIC6vG"
    },
    {
        id: 2,
        username: "Platformer God",
        email: "PlatformerGod@gmail.com",
        password: "$2b$10$c6jSS/0mdN1zanqQK0M2bOV9xPrG7eedR7i2a.fUT6b1yn9YIC6vG"
    },
    {
        id: 3,
        username: "Aurora32",
        email: "Aurora32@gmail.com",
        password: "$2b$10$c6jSS/0mdN1zanqQK0M2bOV9xPrG7eedR7i2a.fUT6b1yn9YIC6vG"
    }
]

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;