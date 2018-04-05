import * as neo4j from "neo4j-driver";

const driver = neo4j.v1.driver("bolt://localhost:7687", neo4j.v1.auth.basic("neo4j", "vayquara"));
const session = driver.session();

class Pet {
    name = null;
    gender = null;
    breed = null;

    static async getPetTypes() {
        let petTypes;

        try {
            const results = await session.run("MATCH (petType:PetType) RETURN petType");
            petTypes = results.records.map(record => (record.toObject() as any).petType.properties);
        } catch (error) {
            console.log(error);
            petTypes = [];
        }

        return petTypes;
    }

    static async getPetBreeds() {
        let petBreeds;

        try {
            const results = await session.run("MATCH (petBreed:PetBreed)<-[r]->(petType:PetType) RETURN petBreed, r, petType");
            petBreeds = results.records.map(record => record.toObject());
        } catch (error) {
            console.log(error);
            petBreeds = [];
        }

        return petBreeds;
    }

    static async getUserPets() {
        let pets;

        const parameters = {};

        try {
            const results = await session.run("" +
                "MATCH(pet:Pet {uid:{uid}}) ", parameters);
            pets = results.records[0].toObject();
        } catch (error) {
            console.log(error);
            pets = null;
        }

        return pets;
    }

    static async addPet({ uid, type, breed, gender, name }): Promise<object> {
        let pet;

        const parameters = {
            uid,
            type,
            breed,
            gender,
            name,
        };

        // "RETURN pet.id as id, pet.breed as breed, pet.gender as gender, pet.name as name"

        try {
            const results = await session.run("" +
                "MATCH(user:User {uid:{uid}}) " +
                "MATCH(petBreed:PetBreed {name:{breed}}) " +
                "CREATE (pet:Pet {type:{type}, breed:{breed}, gender:{gender}, name:{name}}) " +
                "MERGE (user)-[owns:OWNS]-(pet) " +
                "MERGE (pet)-[hasBreed:HAS_BREED]-(petBreed) " +
                "RETURN pet", parameters);

            console.log(results);

            pet = results.records[0].toObject();
        } catch (error) {
            console.log(error);
            pet = null;
        }

        return pet;
    }


}

export default Pet;
