const { options } = require('./db');
const knex = require ('knex')(options);

const articulos = [
    {
        name: 'Chocolate',
        code: 'CH-L4T3',
        price: 500,
        stock: 10
    },
    {
        name: 'Chocolate blanco',
        code: 'CH-L4T3WH',
        price: 400,
        stock: 7
    },
    {
        name: 'Chocolate con frambuesa',
        code:   'CH-FRM',
        price:  700,
        stock: 20
    },
    {
        name: 'Chocolate en rama',
        code: 'CH-RMMM4',
        price: 650,
        stock: 20
    }
];

 //insertar products en BD con promises
 knex('artículos').insert(articulos)
    .then(() => {
        console.log('artículos inserted');
    })
    .catch( err => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });