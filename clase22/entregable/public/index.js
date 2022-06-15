const socket = io.connect();

// Productos
function renderProducts(data){
    const html = data.map(product => {
        return (`<tr>
                    <td >${product.name}</td>
                    <td>${product.price}</td>
                    <td>
                        <img src="${product.photoURL}" alt="Foto del producto">
                    </td>
                </tr>`)
    }).join(" ");
    document.getElementById('products').innerHTML = html
};

socket.on('products', function (data) {renderProducts(data)});

function addProduct(e) {
    const product = {name: document.getElementById('name').value,
                    price: document.getElementById('price').value,
                    photoURL: document.getElementById('productImg').value
                };
    socket.emit('new-product', product);
    console.log(product)
    return false
};


/// MENSAJES
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

function addMessage(e) {
    const commentDate = new Date().toLocaleString()

    const message = {user: document.getElementById('user').value,
                    date: commentDate,
                    messages: {
                        message: document.getElementById('message').value
                    }
                };
    socket.emit('new-message', message);
    return false
}