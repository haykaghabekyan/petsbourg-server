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
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Pets");
    }
};
