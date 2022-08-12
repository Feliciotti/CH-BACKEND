const objetoPrueba = {id: 1, nombre: 'product', precio: undefined, descripcion: undefined}

console.log(objetoPrueba);

Object.keys(objetoPrueba).forEach(key => {

 if (objetoPrueba[key] === undefined) {

  delete objetoPrueba[key];

 }

});

console.log(objetoPrueba);