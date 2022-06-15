import { normalize, schema } from 'normalizr';

// Definimos un esquema de autor
const schemaAuthor = new schema.Entity('user',
{},
{ idAttribute: 'email' });

// Definimos un esquema de mensaje
const schemaMessage = new schema.Entity('message',
{ author: schemaAuthor },
{ idAttribute: 'id' })

// Definimos un esquema de posts
const schemaPost = new schema.Entity('posts',
{ mensajes: [schemaMessage] },
{ idAttribute: 'id' })

const normalizeMssgs = (idMessage) => normalize({
    id: 'mensajes',
    message: idMessage },

    schemaPost)

export { normalizeMssgs }