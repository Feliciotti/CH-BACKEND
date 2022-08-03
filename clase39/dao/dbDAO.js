const options = require('./options/mariaDB.js');
const knex = require ('knex')(options);


class dbDAO {
    static findAll(table){

        knex
        .from(table)
        .select('*')
        .then(rows => {
            console.log(rows);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            knex.destroy();
        })
    }
}

module.exports = dbDAO