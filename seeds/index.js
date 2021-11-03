
const seedLevel = require('./seedLevel');
const seedUser = require("./seedUser");
const seedComment = require("./seedComment");

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
