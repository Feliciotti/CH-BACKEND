const socket = io()

socket.on('loadMssgs', (data) =>{
    console.log(data);
})

const chat = document.querySelector('#chat')
chat.addEventListener('submit', (e) => {
    e.preventDefault()

    let commentDate = new Date().toLocaleString()
    const message = {title: document.getElementById('user').value,
                    date: commentDate,
                    messages: {
                        message: document.getElementById('message').value
                    }
                };
    
    console.log(
        document.getElementById('user').value,
        document.getElementById('message').value
    );

    socket.emit('newMssg', message);
    chat.reset()
})

function showMssgs(data) {
    const html = data.map(e => {
        return (` <div>
        <strong style="color:blue">${e.title}</strong>
        <span style="color:brown">[${e.date}]:<span>
        <em style="color:green">${e.messages.message}</em>
            </div>`);
    }).join(" ");
    document.getElementById('messages').innerHTML = html
}

socket.on('loadMssgs', messages => {
    showMssgs(messages)
})