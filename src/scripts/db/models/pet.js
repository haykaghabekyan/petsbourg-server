export default (sequelize, DataTypes) => {

    const Pet = sequelize.define('Pet', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Pet must have a name."
                },
            }
        },
        petTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        petBreedId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            validate: {
                isIn: {
                    args: [["Female", "Male"]],
                    msg: "Please choose your pets gender."
                },
                notEmpty: {
                    msg: "Please choose your pets gender."
                },
            }
        }
    }, {
        //..
    });

    Pet.associate = function (models) {
        // associations can be defined here

        Pet.belongsTo(models.User, {
            foreignKey: "userId"
        });

        Pet.belongsTo(models.PetType, {
            foreignKey: "petTypeId"
        });

        Pet.belongsTo(models.PetBreed, {
            foreignKey: "petBreedId"
        });

    };

    return Pet;
};
