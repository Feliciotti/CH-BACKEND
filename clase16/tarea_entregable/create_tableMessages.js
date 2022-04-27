const { options } = require('./options/sqLITE');
const knex = require ('knex')(options);


// sintaxis async/await
(async() => {
    try{
        await knex.schema.createTable('messagesRecord', table => {
            table.increments('id')
            table.string('user')
            table.string('message')
        });
        console.log('messagesRecord created');
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
})(); 