import * as neo4j from "neo4j-driver";
const driver = neo4j.v1.driver("bolt://localhost:7687", neo4j.v1.auth.basic("neo4j", "vayquara"));

class Sitter {

    constructor() {

    }



}

export default Sitter;