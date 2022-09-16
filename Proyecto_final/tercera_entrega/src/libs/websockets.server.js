import { messagesDao } from "../controller/db.controller.js";

export default (io) => {
    io.on('connection', async (socket) => {
        console.log('new socket connection');

        const messages = await messagesDao.getAll()
        io.emit('loadMssgs', messages)

        socket.on('newMssg', async message =>{

            // console.log(message);
            const lastmessage = await messagesDao.add(message)

            console.log(lastmessage);

            io.emit('messages', message);
        })
    })
}