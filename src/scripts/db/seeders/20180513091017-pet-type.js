export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('PetTypes', [{
            id: 1,
            name: 'Dog',
        }, {
            id: 2,
            name: 'Cat',
        }, {
            id: 3,
            name: 'Fish',
        }, {
            id: 4,
            name: 'Bird',
        }, {
            id: 5,
            name: 'Hamster',
        }, {
            id: 6,
            name: 'Rabbit'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('PetTypes', null, {});
    }
};
