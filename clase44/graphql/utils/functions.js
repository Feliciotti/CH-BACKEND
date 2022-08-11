import crypto from "crypto";
import { Persona } from "../models/Persona.js";

const personasMap = {}

function getPersonas({ campo, valor }) {
    const personas = Object.values(personasMap)
    if (campo && valor) {
        return personas.filter(p => p[ campo ] == valor);
    } else {
        return personas;
    }
 }
 
 function getPersona({ id }) {
    if (!personasMap[ id ]) {
        throw new Error('Persona not found.');
    }
    return personasMap[ id ];
 }
 
 function createPersona({ datos }) {
    const id = crypto.randomBytes(10).toString('hex');
    const nuevaPersona = new Persona(id, datos)
    personasMap[ id ] = nuevaPersona;
    return nuevaPersona;
 }
 
 function updatePersona({ id, datos }) {
    if (!personasMap[ id ]) {
        throw new Error('Persona not found');
    }
    const personaActualizada = new Persona(id, datos)
    personasMap[ id ] = personaActualizada;
    return personaActualizada;
 }
 
 function deletePersona({ id }) {
    if (!personasMap[ id ]) {
        throw new Error('Persona not found');
    }
    const personaBorrada = personasMap[ id ]
    delete personasMap[ id ];
    return personaBorrada;
 }

 export {
    getPersona,
    getPersonas,
    updatePersona,
    deletePersona, 
    createPersona
}
 