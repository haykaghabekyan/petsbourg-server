export default (sequelize, DataTypes) => {

    const PetType = sequelize.define('PetType', {
        name: DataTypes.STRING,
    }, {

    });

    PetType.associate = function (models) {
        // associations can be defined here

        PetType.hasMany(models.PetBreed, {
            foreignKey: "petTypeId",
        });

    };

    return PetType;
};