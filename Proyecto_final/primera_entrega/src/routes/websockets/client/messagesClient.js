const socket = io.connect();

function render(data) {
    const html = data.map(element => {
        return (` <div>
        <strong style="color:blue">${element.author}</strong>
        <span style="color:brown">[${element.dateOfComment}]:<span>
        <em style="color:green">${element.text}</em>
            </div>`);
    }).join(" ");
    document.getElementById('messages').innerHTML = html
}

socket.on('messages', function (data) {render(data)});

function addMessage(e) {
    const commentDate = new Date().toLocaleString()

    const message = {author: document.getElementById('username').value,
                    dateOfComment: commentDate,
                    text: document.getElementById('text').value
                };
    socket.emit('new-message', message);
    return false
}