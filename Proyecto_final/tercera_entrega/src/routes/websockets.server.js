// import mensajesApi from '../../api/mensajes.js'

const messages = []

async function serverSocket(socket, sockets) {

    socket.emit('messages', messages);

    socket.on('new-message', (data) => {
        messages.push(data);
        sockets.emit('messages', messages);
    });
};

export { serverSocket }