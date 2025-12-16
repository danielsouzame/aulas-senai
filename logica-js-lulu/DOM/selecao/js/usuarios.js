// console.log("arquivo usuarios carregado")

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(usuarios => {
    const container = document.getElementById('container')
    const cards = usuarios.map(usuario =>{
        return `
        <div class="card">
            <img src="https://placehold.co/600x400" alt="foto do usuario" />
            <h2>${usuario.name}</h2>
            <p><strong>Username:</strong> ${usuario.username}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Telefone:</strong> ${usuario.phone}</p>
            <p><strong>Site:</strong> ${usuario.website}</p>
            <p><strong>Empresa:</strong> ${usuario.company.name}</p>
            <p><strong>Endereço:</strong> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}</p>
        </div>
        `
    })
    container.innerHTML = cards.join("")
})