const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

class Accounts extends Model {}

Accounts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    account_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    URL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },

  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
  // },

  // {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "accounts",
  }
);

module.exports = Accounts;
