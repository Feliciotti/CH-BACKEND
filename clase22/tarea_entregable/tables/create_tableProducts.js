import db from '../options/db.js'
import knex from 'knex';

(async() => {
    const dbClient = knex(db)

    try{

        await dbClient.schema.createTable('products', table => {
            table.increments('id')
            table.string('name')
            table.float('price')
            table.string('photoURL')
        });
        console.log('products created');
    } catch (err) {
        console.log(err);
    } finally {
        dbClient.destroy();
    }
})(); 