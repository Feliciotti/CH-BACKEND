const socket = io.connect();

/// MENSAJES
function render(data) {
    const html = data.map(element => {
        return (` <div>
        <strong style="color:blue">${element.user}</strong>
        <span style="color:brown">[${element.date}]:<span>
        <em style="color:green">${element.text}</em>
            </div>`);
    }).join(" ");
    document.getElementById('messages').innerHTML = html
}

socket.on('messages', function (data) {render(data)});

function addMessage(e) {
    const commentDate = new Date().toLocaleString()

    const message = {user: document.getElementById('user').value,
                    date: commentDate,
                    text: document.getElementById('text').value
                };
    socket.emit('new-message', message);
    return false
}