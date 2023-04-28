const User = require('./user');
const Accounts = require('./accounts');


User.hasMany(Accounts, {
    foreignKey: 'username'
}
)


Account.belongsTo(User)


module.exports = { User, Accounts };
