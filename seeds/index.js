
const seedLevel = require('./levelSeed');
const seedUser = require("./userSeed");
const seedComment = require("./commentSeed");

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedLevel();
  console.log('\n----- LEVELS SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
