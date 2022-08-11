const publishButton = document.getElementById('publish');
const nameInput = document.getElementById('nombre');
const ageInput = document.getElementById('edad');

publishButton.addEventListener('click', event => {
    event.preventDefault()

    fetch('http://localhost:3000/graphql', {
        method: 'POST',

        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            query: `mutation {
                createPersona(datos: {
                  nombre: "${nombre.value}",
                  edad: ${edad.value}
                }) {
                  id
                }
               }
               `
        })
    })
      .then(res => res.json())
      .then(res => console.log(res))
      
});