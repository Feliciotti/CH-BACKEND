const { options } = require('./db');
const knex = require ('knex')(options);


// sintaxis async/await
(async() => {
    try{
        await knex.schema.createTable('artículos', table => {
            table.increments('id')
            table.string('name', 15)
            table.float('price', 10)
            table.string('code')
            table.integer('stock')
        });
        console.log('table created');
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
})(); 