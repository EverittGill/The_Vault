const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { AES } = require("crypto-js");

const ENCRYPTION_KEY = "MySuperSecretKey";

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
        // Encrypt the password using AES
        const encryptedPassword = AES.encrypt(newUserData.password, ENCRYPTION_KEY).toString();
        newUserData.password = encryptedPassword;
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        // Encrypt the password using AES
        const encryptedPassword = AES.encrypt(updatedUserData.password, ENCRYPTION_KEY).toString();
        updatedUserData.password = encryptedPassword;
        return updatedUserData;
      },
    },
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "accounts",
  }
);

module.exports = Accounts;
