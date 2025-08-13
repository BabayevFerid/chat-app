const socket = io();

socket.on('message', function(msg) {
    let messages = document.getElementById('messages');
    let newMsg = document.createElement('div');
    newMsg.textContent = msg;
    messages.appendChild(newMsg);
    messages.scrollTop = messages.scrollHeight;
});

function sendMessage() {
    let username = document.getElementById('username').value.trim();
    let message = document.getElementById('message').value.trim();
    
    if(username && message) {
        socket.send(username + ": " + message);
        document.getElementById('message').value = '';
    }
}
