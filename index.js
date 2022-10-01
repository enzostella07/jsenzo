//inicio
let arrayCarrito = []
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carro')) {
        arrayCarrito = JSON.parse(localStorage.getItem('carro'));
        llenarCarrito();
    }
});

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
        let item = personajes.find((tarjeta) => tarjeta.id === idProducto)
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
mostrarPersonajes(personajes)






/*
let saldo = 2000

let usuario = prompt("Para comenzar ingrese su nombre por favor")

alert(`Hola ${usuario}. Bienvenido a la tienda de personajes.`)

alert("En nuestra tienda cada personaje tiene un valor distinto")

alert(`Usted ahora mismo tiene un saldo de ${saldo}$`)


let personajes = [
    { ID: 0, nombre: "Mengano", precio: 500 },
    { ID: 1, nombre: "Pablito", precio: 600 },
    { ID: 2, nombre: "Fulano", precio: 700 },
    { ID: 3, nombre: "Menganito", precio: 900 },
    { ID: 4, nombre: "Messi", precio: 2000 },
];

filtro = parseInt(prompt(`
-Ingrese 1 si quiere buscar por precio
-Ingrese 2 si quiere buscar por nombre
-Ingrese 3 si quiere buscar por ID
`))

while (filtro < 1 || filtro > 3) {
    filtro = parseInt(prompt(`Ingrese un numero correcto`))
}
if (filtro === 1) {
    let conte = document.getElementById ("contenedor")
    let precios = parseInt(prompt("Ingrese el precio minimo a encontrar por favor"));
    let filtradoPrecio = personajes.filter(item => item.precio >= precios);
    let divs = document.createElement("div")
    for (const contador of filtradoPrecio) {

        divs.innerHTML += `<h2>ID: ${contador.ID} </h2>
                        <h3>ID: ${contador.nombre} </h3>
                        <b>ID: ${contador.precio} <b>`;
    }
    conte.appendChild(divs);



    //     let precio = parseInt(prompt(
    //         `Ingrese el PRECIO minimo del personaje que desea encontrar:
    //         - ID: 0, nombre: "Mengano", precio: 500
    //         - ID: 1, nombre: "Pablito", precio: 600
    //         - ID: 2, nombre: "Fulano", precio: 700
    //         - ID: 3, nombre: "Menganito", precio: 900
    //         - ID: 4, nombre: "Messi", precio: 2000`))

    // let filtradoPrecio = personajes.filter(item => item.precio >= precio);
    // console.log(filtradoPrecio);
}

if (filtro === 2) {
    let nombre = prompt(
        `Ingrese el nombre del personaje que desea encontrar:
            - ID: 0, nombre: "Mengano", precio: 500
            - ID: 1, nombre: "Pablito", precio: 600
            - ID: 2, nombre: "Fulano", precio: 700
            - ID: 3, nombre: "Menganito", precio: 900
            - ID: 4, nombre: "Messi", precio: 2000`)

    let filtradoName = personajes.find(item => item.nombre === nombre);
    console.log(filtradoName);
}

if (filtro === 3) {
    let ID = parseInt(prompt(
        `Ingrese el ID del personaje que desea encontrar:
            - ID: 0, nombre: "Mengano", precio: 500
            - ID: 1, nombre: "Pablito", precio: 600
            - ID: 2, nombre: "Fulano", precio: 700
            - ID: 3, nombre: "Menganito", precio: 900
            - ID: 4, nombre: "Messi", precio: 2000`))

    let filtradoID = personajes.find(item => item.ID === ID);
    console.log(filtradoID);
}
*/
