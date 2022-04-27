const { options } = require('./mariaDB');
const knex = require ('knex')(options);

//Tabla creada con función createTable() con tres columnas:
// id, nombre, precio.
// sintaxis de promesas
// knex.schema.createTable('products', table => {
//     table.increments('id')
//     table.string('name')
//     table.integer('price')
// })
//     .then(() => console.log('table created'))
//     .catch((err) => {console.log(err); throw err;})
//     .finally(() => {
//         knex.destroy();
//     });


// sintaxis async/await
(async() => {
    try{
        await knex.schema.createTable('products', table => {
            table.increments('id')
            table.string('name')
            table.integer('price')
        });
        console.log('table created');
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
})();