#! /bin/bash

NEO4J_HOME=/Users/haykaghabekyan/Library/Application\ Support/Neo4j\ Desktop/Application/neo4jDatabases/database-9673604b-a14d-489f-bf53-30a9d02881f7/installation-3.3.4
IMPORT_DIR=/Users/haykaghabekyan/Projects/petsbourg

"$NEO4J_HOME"/bin/neo4j-admin import --nodes import/pet-type.csv --nodes "$IMPORT_DIR"/csv/cat-breed.csv