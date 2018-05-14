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
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            petTypeId: {
                type: Sequelize.INTEGER
            },
            petBreedId: {
                type: Sequelize.INTEGER
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
