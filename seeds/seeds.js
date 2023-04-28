const sequelize = require('../config/connection');
const { User, Accounts } = require('../models');

const usersData = require('./usersData.json');
const accountsData = require('./accountsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(usersData, {
    individualHooks: true,
    returning: true,
  });
 
  await Accounts.bulkCreate(accountsData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};
seedDatabase();