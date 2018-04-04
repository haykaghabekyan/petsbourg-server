import * as bcrypt from "bcrypt";
import * as neo4j from "neo4j-driver";
import * as uuid from "uuid";
const driver = neo4j.v1.driver("bolt://localhost:7687", neo4j.v1.auth.basic("neo4j", "vayquara"));
const session = driver.session();

class User {
    static async userExists (email): Promise<object> {
        let user;

        try {
            const results = await session
                .run('MATCH (user:User {email: {email}}) RETURN user', {
                    email: email,
                });

            user = results.records.length ? results.records[0].toObject() : null;
        } catch (error) {
            user = null;
        }

        return user;
    }

    static async signUp ({ email, firstName, lastName, gender, password }): Promise<object> {
        const brcyptedPassword = await User.generateHash(password);

        const parameters = {
            uid: uuid.v4(),
            email: email,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            password: brcyptedPassword,
        };

        let user;

        try {
            const results = await session
                .run("CREATE " +
                    "(user:User {uid:{uid}, email:{email}, firstName:{firstName}, lastName:{lastName}, gender:{gender}, password:{password}})" +
                    "RETURN user.uid as uid, user.firstName as firstName, user.lastName as lastName, user.email as email, user.gender as gender", parameters);
            user = results.records[0].toObject();
        } catch (error) {
            user = null;
        }

        return user;
    }

    static async signIn ({ email, password }): Promise<object> {

        const parameters = {
            email: email,
        };

        let user;

        try {
            const results = await session
                .run("MATCH " +
                    "(user:User {email:{email}}) " +
                    "RETURN user", parameters);
            user = results.records[0].get("user").properties;
        } catch (error) {
            user = null;
        }

        if (user && await User.validPassword(password, user.password)) {
            return {
                uid: user.uid,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                gender: user.gender,
            };
        }

        return null;
    }

    static async generateHash(password) {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    static async validPassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }

}

export default User;
