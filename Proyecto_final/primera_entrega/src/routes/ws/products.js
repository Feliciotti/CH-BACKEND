import { productsDao } from '../../daos/index.js';

export default async function setSocket(socket, sockets) {
    socket.emit('products', await productsDao.getAll());

    socket.on('update', async p => {
        await productsDao.save(p)
        sockets.emit('products', await productsDao.getAll());
    })
}