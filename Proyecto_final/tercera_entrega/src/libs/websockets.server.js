import { messagesDao } from "../controller/db.controller.js";

export default (io) => {
    io.on('connection', (socket) => {    
        
        console.log('A client is on line');

        // const emitMessages = async() =>{
        //     const messages = await messagesDao.getAll()
        //     console.log(messages);
        //     io.emit('messages', messages)
        // }
        // emitMessages()

    });

}