import Sequelize from "sequelize";
import dbConfigs from "../../configs/database";

import UserModel from "./user";
import PetModel from "./pet";
import PetTypeModel from "./pet-type";
import PetBreedModel from "./pet-breed";

const env = process.env.NODE_ENV || "development";
const config = dbConfigs[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config.options);

const models = {
    User: UserModel(sequelize, Sequelize.DataTypes),
    Pet: PetModel(sequelize, Sequelize.DataTypes),
    PetBreed: PetBreedModel(sequelize, Sequelize.DataTypes),
    PetType: PetTypeModel(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

export default {
    sequelize: sequelize,
    Sequelize: Sequelize,
    ...models
};