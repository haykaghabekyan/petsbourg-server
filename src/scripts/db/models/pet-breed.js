export default (sequelize, DataTypes) => {

    const PetBreed = sequelize.define('PetBreed', {
        petTypeId: DataTypes.INTEGER,
        name: DataTypes.STRING,
    }, {
        
    });

    PetBreed.associate = function (models) {
        // associations can be defined here

    };

    return PetBreed;
};