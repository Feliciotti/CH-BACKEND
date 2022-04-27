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
    return false
};


/// MENSAJES
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