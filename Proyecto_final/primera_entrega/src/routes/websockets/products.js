import productsApi from '../../api/indexAPIS.js';

export default async function configurarSocket(socket, sockets) {
    socket.emit('products', await productsApi.getAll());

    socket.on('new-product', async product => {
        await productsApi.save(product)
        sockets.emit('productos', await productsApi.getAll());
    })
}