export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("PetBreed", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            petTypeId: {
                type: Sequelize.INTEGER,
                unique: true
            },
            name: {
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
        return queryInterface.dropTable("PetBreed");
    }
};