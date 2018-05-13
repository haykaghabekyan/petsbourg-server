export default (sequelize, DataTypes) => {

    const PetBreed = sequelize.define('PetBreed', {
        petTypeId: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
    }, {
        
    });

    PetBreed.associate = function (models) {
        // associations can be defined here

    };

    return PetBreed;
};