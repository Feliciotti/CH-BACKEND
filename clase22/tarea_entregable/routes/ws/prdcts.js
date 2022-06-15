import { prdcts } from "../../dao/sqlDAO.js";

export default async function productsSettings(socket, sockets) {

    let products = await prdcts.getAll();

    socket.emit('products', products)

    socket.on('new-product', async (data) => {
        await prdcts.save(data);

        sockets.emit('products', products);
    });
}