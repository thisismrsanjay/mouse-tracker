const socketIO = require('socket.io');

function init(server){
    const io = socketIO(server);

    console.log('socket server is listening for connections');

    io.on('connection',socket=>{
        io.emit('message-client-connected',`Client with ${socket.id} was connected.`);  
    } )
}
module.exports ={
    init
};