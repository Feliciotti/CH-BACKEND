export default (io) => {
    io.on('connection', async function(socket) {    
        
        console.log('A client is on line');

        socket.emit('messages', messages);
        socket.on('new-message', (data) => {
            mssgs.save(data);
            io.sockets.emit('messages', messages);
        });
    });

}