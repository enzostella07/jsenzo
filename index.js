//inicio
let arrayCarrito = []
window.addEventListener("load", () => {
    infoJson()
})

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carro')) {
        arrayCarrito = JSON.parse(localStorage.getItem('carro'));
        llenarCarrito();
    }
});


//Creador de tarjetas
const mostrarPersonajes = (personajes) => {
    const contenedorPersonajes = document.getElementById("personaje-contenedor")

    personajes.forEach(personaje => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${personaje.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title">${personaje.nombre}</h2>
                                <h5 class="card-text">Descripción:  ${personaje.desc}</h5>
                                <b class="card-text">Precio:$ ${personaje.precio}</b>
                                <button class="btn btn-primary" id=boton${personaje.id}>Comprar</button>
                            </div>
                        </div>`

        contenedorPersonajes.appendChild(div)

        const boton = document.getElementById(`boton${personaje.id}`)
        /*
        boton.addEventListener('click', () => {
            alert(`Usted eligio a ${personaje.nombre}`)
            alert(`El precio es de ${personaje.precio}`)
        })
        */
        boton.addEventListener("click", () => {
            agregarCarrito(personaje.id)
        })
    })
}

let carrito = document.getElementById("contenedor__carrito")
const agregarCarrito = (idProducto) => {
    if (arrayCarrito.some((tarjeta) => tarjeta.id === idProducto)) {
        Swal.fire({
            title: `Su personaje ya esta en el carrito`,
            text: 'No puede seleccionar 2 veces el mismo personaje',
            icon: 'error',
            confirmButtonText: "ok"
        })
    } else {
        let item = pj.find((tarjeta) => tarjeta.id === idProducto)
        arrayCarrito.push(item)
        Swal.fire(
            'Se agrego al carrito',
            `Se agrego a ${item.nombre} al carrito`,
            'success'
        )
    }
    llenarCarrito()
}

const eliminarPersonaje = (personaje) => {
    item = arrayCarrito.findIndex((sujeto) => sujeto.id === personaje)
    arrayCarrito.splice(item, 1)
    llenarCarrito()
    Swal.fire(
        'Eliminacion Exitosa',
        ``,
        'success'
    )
}

const llenarCarrito = () => {
    carrito.innerHTML = ""
    arrayCarrito.forEach(personaje => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${personaje.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title">${personaje.nombre}</h2>
                                <button class="btn btn-danger" id="botonEliminar${personaje.id}">Borrar</button>
                                </div>
                                </div>`


        /*
        BOTON PARA FAVORITOS
        <button class="btn btn-primary" id="botonFavorito${personaje.id}">FAV</button>

        //##############################

        <button class="btn btn-primary" id=boton${personaje.id}>Comprar</button>
        <b class="card-text">Precio:$ ${personaje.precio}</b>
        <h5 class="card-text">Descripción:  ${personaje.desc}</h5>   
        */

        carrito.appendChild(div)

        const boton = document.getElementById(`botonEliminar${personaje.id}`)
        boton.addEventListener("click", () => eliminarPersonaje(personaje.id))
    })

    let totalPrecios = arrayCarrito.reduce((acumulador, item) => acumulador + item.precio, 0)
    let insertarPrecios = document.getElementById("total__carrito")
    insertarPrecios.innerHTML = `
                                <p>$${totalPrecios}</p>
    `

    localStorage.setItem("carro", JSON.stringify(arrayCarrito))
}


const pj = []
const infoJson = async () => {
    let respuestaInfo = await fetch("./personajes.json")
    let respuesta = await respuestaInfo.json()
    respuesta.forEach(item => {
        pj.push(item)
    });
    mostrarPersonajes(respuesta)
}
