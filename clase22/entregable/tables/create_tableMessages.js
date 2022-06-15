import { sqLITE } from '../options/sqLITE.js';
import knex from 'knex';

// sintaxis async/await
(async() => {
    const liteClient = knex(sqLITE)

    try{

        await liteClient.schema.createTable('messagesRecord', table => {
            table.increments('id')
            table.string('user')
            table.string('date')
            table.string('text')
        });
        console.log('messagesRecord created');
    } catch (err) {
        console.log(err);
    } finally {
        liteClient.destroy();
    }
})();