const { db } = require('./options/db');
const knex = require ('knex')(db);


// sintaxis async/await
(async() => {
    try{
        await knex.schema.createTable('products', table => {
            table.increments('id')
            table.string('name')
            table.float('price')
            table.string('photoURL')
        });
        console.log('products created');
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
})(); 

// knex.schema.createTable('products', table => {
//     table.increments('id')
//     table.string('name')
//     table.float('price')
//     table.string('photoURL')
// })
//     .then(() => {
//         console.log('Products table created');
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => {
//         knex.destroy();
//     });