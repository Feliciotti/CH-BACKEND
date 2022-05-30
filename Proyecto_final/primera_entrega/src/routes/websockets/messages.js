import messagesApi from '../../api/indexAPIS.js';
// import { normalizarMensajes } from '../../normalizacion/index.js'

export default async function setMessagesSocket(socket, sockets) {
    socket.emit('messages', await messagesApi.getAll());

    socket.on('new-message', async message => {
        await messagesApi.save(message)
        sockets.emit('messages', await messagesApi.listarAll());
    })
}