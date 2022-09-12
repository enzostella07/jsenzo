//inicio

let saldo = 2000

let usuario = prompt ("Para comenzar ingrese su nombre por favor") 

alert(`Hola ${usuario}. Bienvenido a la tienda de personajes.`)

alert ("En nuestra tienda cada personaje tiene un valor distinto")

alert(`Usted ahora mismo tiene un saldo de ${saldo}$`)


let personajes = [
    {ID: 0, nombre: "Mengano", precio: 500},
    {ID: 1, nombre: "Pablito", precio: 600},
    {ID: 2, nombre: "Fulano", precio: 700},
    {ID: 3, nombre: "Menganito", precio: 900},
    {ID: 4, nombre: "Messi", precio: 2000},
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
        let conte = document.getElementsByClassName("contenedor")
        let precios = parseInt(prompt("Ingrese el precio minimo a encontrar por favor"));
        let filtradoPrecio = personajes.filter(item => item.precio >= precios);

        for (let contador of filtradoPrecio){
            let divs = document.createElement("div")
            divs.innerHTML = `<h2>ID: ${contador.ID} </h2>`
                             `<h3>ID: ${contador.nombre} </h3>`
                             `<b>ID: ${contador.precio} <b>`;

            conte.append(divs)
        }



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

