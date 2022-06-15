import { mssgs } from "../../dao/sqlDAO.js";

export default async function messagesSettings(socket, sockets) {

    let messages = await mssgs.getAll();

    socket.emit('messages', messages)

    socket.on('new-messages', async (data) => {
        await mssgs.save(data);
        
        sockets.emit('messages', messages);
    });
}