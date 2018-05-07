import Sequelize from "sequelize";
import dbConfigs from "../../configs/database";

import UserModel from "./user";

const env = process.env.NODE_ENV || "development";
const config = dbConfigs[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config.options);

export default {
    sequelize: sequelize,
    Sequelize: Sequelize,
};
export const User = UserModel(sequelize, Sequelize.DataTypes);
