const { options } = require('./mariaDB');
const knex = require ('knex')(options);

const products = [
    {name: 'Remera', price: 1000},
    {name: 'Buzo', price: 1500},
    {name: 'Album', price: 600},
    {name: 'Poster', price: 400}
];

 //insertar products en BD con promises
 knex('products').insert(products)
    .then(() => {
        console.log('products inserted');
    })
    .catch( err => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });