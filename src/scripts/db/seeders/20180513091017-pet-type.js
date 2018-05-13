export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('PetTypes', [{
            id: 1,
            name: 'Dog',
            createdAt: new Date(), updatedAt: new Date()
        }, {
            id: 2,
            name: 'Cat',
            createdAt: new Date(), updatedAt: new Date()
        }, {
            id: 3,
            name: 'Fish',
            createdAt: new Date(), updatedAt: new Date()
        }, {
            id: 4,
            name: 'Bird',
            createdAt: new Date(), updatedAt: new Date()
        }, {

            id: 5,
            name: 'Hamster',
            createdAt: new Date(), updatedAt: new Date()
        }, {
            id: 6,
            name: 'Rabbit',
            createdAt: new Date(), updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('PetTypes', null, {});
    }
};
