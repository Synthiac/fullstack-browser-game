const { Level } = require("../models");

const levelData = [
    {
        id: 1,
        level_name: "The Beginning.",
        description: "The start of something interesting.",
    },
    {
        id: 2,
        level_name: "First Steps",
        description: "I believe birds are Government spies.",
    },
    {
        id: 3,
        level_name: "Stuck",
        description: "You don't want to be here...",
    }
];

const seedLevel = () => Level.bulkCreate(levelData);
module.exports = seedLevel;