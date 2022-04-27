const { options } = require('./mariaDB');
const knex = require ('knex')(options);

// SELECT * FROM products
knex.from('products').select('*')
    .then(rows => {
        console.log(rows);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    }); 