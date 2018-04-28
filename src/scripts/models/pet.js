import * as neo4j from "neo4j-driver";

const driver = neo4j.v1.driver("bolt://localhost:7687", neo4j.v1.auth.basic("neo4j", "vayquara"));
const session = driver.session();

class Pet {
    name = null;
    gender = null;
    breed = null;

    static async getPetTypes() {
        let petTypes = {};

        try {
            const results = await session.run("MATCH (petBreed:PetBreed)-[r]-(petType:PetType) RETURN petBreed, petType");
            results.records.forEach(record => {
                const rec = record.toObject();

                petTypes[rec.petType.properties.name] = petTypes[rec.petType.properties.name] || [];

                petTypes[rec.petType.properties.name].push({
                    petBreed: rec.petBreed.properties.name,
                });

            });
        } catch (error) {
            console.log("error", error);
        }

        return petTypes;
    }

    static async getPetBreeds() {
        let petBreeds;

        try {
            const results = await session.run("MATCH (petBreed:PetBreed)<-[r]->(petType:PetType) RETURN petBreed, r, petType");
            petBreeds = results.records.map(record => record.toObject());
        } catch (error) {
            console.log("error", error);
            petBreeds = [];
        }

        return petBreeds;
    }

    static async getUserPets(uid) {
        let pets;

        const parameters = {
            uid
        };

        try {
            const results = await session.run("MATCH (pet:Pet)-[r]-(user:User {uid:{uid}}) RETURN pet", parameters);
            pets = results.records.map(record => record.toObject().pet.properties);

        } catch (error) {
            console.log("error", error);
            pets = [];
        }

        return pets;
    }

    static async addPet({ pet, user }) {
        // const { uid } = user;
        // const { type, breed, gender, name } = pet;

        try {
            const results = await session.run("" +
                "MATCH(user:User {uid:{uid}}) " +
                "MATCH(petBreed:PetBreed {name:{breed}}) " +
                "CREATE (pet:Pet {type:{type}, breed:{breed}, gender:{gender}, name:{name}}) " +
                "MERGE (user)-[owns:OWNS]-(pet) " +
                "MERGE (pet)-[hasBreed:HAS_BREED]-(petBreed) " +
                "RETURN pet", { ...user, ...pet });

            pet = results.records[0].toObject();
        } catch (error) {
            console.log("error", error);
            pet = null;
        }

        return pet;
    }

}

export default Pet;
