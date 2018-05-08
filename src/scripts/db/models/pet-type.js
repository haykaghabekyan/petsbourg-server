export default (sequelize, DataTypes) => {

    const PetType = sequelize.define('PetType', {
        name: DataTypes.STRING,
    }, {

    });

    PetType.associate = function (models) {
        // associations can be defined here

    };

    return PetType;
};