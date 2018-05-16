import bcrypt from "bcrypt";

export default (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "First name can not be empty."
                },
            }
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Last name can not be empty."
                },
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: {
                msg: "This email is taken. Try another."
            },
            validate: {
                isEmail: {
                    msg: "Please enter valid email address."
                },
            }
        },
        username: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            set(val) {
                this.setDataValue('password', bcrypt.hashSync(val, bcrypt.genSaltSync(8)));
            },
            validate: {
                notEmpty: true,
            }
        },
        gender: {
            type: DataTypes.STRING,
            validate: {
                isIn: {
                    args: [["Female", "Male"]],
                    msg: "Please choose your gender."
                },
                notEmpty: {
                    msg: "Please choose your gender."
                },
            }
        }
    }, {

    });

    User.associate = function (models) {
        // associations can be defined here

        User.hasMany(models.Pet, {
            foreignKey: 'userId',
            onDelete: 'cascade',
        });

    };

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    return User;
};