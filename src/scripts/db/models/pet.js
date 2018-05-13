export default (sequelize, DataTypes) => {

    const Pet = sequelize.define('Pet', {
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

    });

    Pet.associate = function (models) {
        // associations can be defined here
    };

    return Pet;
};