const { sqLITE } = require('./options/sqLITE');
const knex = require ('knex')(sqLITE);


// sintaxis async/await
(async() => {
    try{
        await knex.schema.createTable('messagesRecord', table => {
            table.increments('id')
            table.string('user')
            table.string('date')
            table.string('text')
        });
        console.log('messagesRecord created');
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
})(); 


// knex.schema.createTable('messagesRecord', table => {
//     table.increments('id')
//     table.string('user')
//     table.string('date')
//     table.string('text')
// })
// .then(() => {
//     console.log('Products table created');
// })
// .catch(err => {
//     console.log(err);
// })
// .finally(() => {
//     knex.destroy();
// });