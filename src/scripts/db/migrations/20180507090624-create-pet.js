export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Pets", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: {
                    model: "Users",
                    key: "id",
                }
            },
            name: {
                type: Sequelize.STRING
            },
            petTypeId: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: {
                    model: "PetTypes",
                    key: "id",
                }
            },
            petBreedId: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: {
                    model: "PetBreeds",
                    key: "id",
                }
            },
            gender: {
                type: Sequelize.STRING,
            },
            story: {
                type: Sequelize.TEXT,
            },
            passportId: {
                type: Sequelize.STRING,
            },
            color: {
                type: Sequelize.STRING,
            },
            size: {
                type: Sequelize.STRING,
            },
            birthday: {
                type: Sequelize.DATE,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Pets");
    }
};
