const User = require("./user");
const Accounts = require("./accounts");

User.hasMany(Accounts, {
  foreignKey: "user_id",
});

Accounts.belongsTo(User);

module.exports = { User, Accounts };
