const socket = io.connect();

function render(data) {
    const html = data.map(element => {
        return (` <div>
        <strong style="color:blue">${element.user}</strong>
        <span style="color:brown">[${element.date}]:<span>
        <em style="color:green">${element.messages.message}</em>
            </div>`);
    }).join(" ");
    document.getElementById('messages').innerHTML = html
}

socket.on('messages', function (data) {render(data)});

const addMessage = document.getElementById(addMessage)
addMessage.addEventListener('submit', e => {
    e.preventDefault()
    const commentDate = new Date().toLocaleString()

    const message = {user: document.getElementById('user').value,
                    date: commentDate,
                    messages: {
                        message: document.getElementById('message').value
                    }
                };
    socket.emit('new-message', message);
    return false
})
