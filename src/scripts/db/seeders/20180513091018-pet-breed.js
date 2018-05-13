const breedList = [
    require("../../data/pet-breeds/dog"),
    require("../../data/pet-breeds/cat"),
    require("../../data/pet-breeds/bird"),
    require("../../data/pet-breeds/hamster"),
    require("../../data/pet-breeds/rabbit"),
    require("../../data/pet-breeds/fish"),
];

export default {
    up: (queryInterface, Sequelize) => {
        let data = [];

        breedList.forEach(breeds => {
            breeds.forEach(breed => {
                if (breed.petTypeId && breed.name) {
                    data.push({
                        petTypeId: breed.petTypeId,
                        name: breed.name,
                    });
                }
            });
        });

        return queryInterface.bulkInsert('PetBreeds', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('PetBreeds', null, {});
    }
};
