// DEPENDENCIES
import express from "express";
import { graphqlHTTP } from "express-graphql";
import crypto from "crypto";

// FUNCTIONS
import { schema } from "./models/Persona.js";
import {    
    getPersona,
    getPersonas,
    updatePersona,
    deletePersona, 
    createPersona   } from "./utils/functions.js";

//---------------------------------------------------------------

const app = express();

app.use(express.static('public'));

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: {
            getPersona,
            getPersonas,
            updatePersona,
            deletePersona, 
            createPersona
        },
        graphiql: true
    })
);

const PORT = 3000
app.listen( PORT, () => {
    const msg = `Server on port ${PORT}`
    console.log(msg);
})