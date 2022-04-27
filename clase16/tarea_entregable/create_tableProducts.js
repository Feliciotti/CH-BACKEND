const { options } = require('./options/db');
const knex = require ('knex')(options);


// sintaxis async/await
(async() => {
    try{
        await knex.schema.createTable('products', table => {
            table.increments('id')
            table.string('user')
            table.float('price')
            table.string('URLphoto')
        });
        console.log('products created');
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
})(); 