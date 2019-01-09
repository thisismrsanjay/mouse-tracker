import io from 'socket.io-client';

const API_URL = 'http://localhost:5000';

const socket = io.connect(API_URL);

socket.on('connect',()=>{
    console.log('connected to the server from client');
})

socket.on('message-client-connected',(message)=>{
    console.log(message);
})