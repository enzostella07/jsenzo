//inicio
let saldo = 2000
let usuario = prompt ("Para comenzar ingrese su nombre por favor") 
alert(`Hola ${usuario}. Bienvenido a la tienda de personajes.`)
alert ("En nuestra tienda cada personaje tiene un valor distinto")
alert(`Usted ahora mismo tiene un saldo de ${saldo}$`)
// let personajes = 1


// while (personajes != 0) {
    let personajes = [
        {ID: 0, nombre: "Mengano", precio: 500},
        {ID: 1, nombre: "Pablito", precio: 600},
        {ID: 2, nombre: "Fulano", precio: 700},
        {ID: 3, nombre: "Menganito", precio: 900},
        {ID: 4, nombre: "Messi", precio: 2000},
        {ID: 5, nombre: "0 para salir"},
    ];
    let idPersonaje = parseInt(prompt("Ingrese el ID del personaje que desea comprar"))
    
            if (personajes[idPersonaje].saldo >= 500) {
                let personaje1 = personajes.splice(idPersonaje, 1)
                console.log(personajes);
                console.log(personaje1);
                
                // saldo = saldo - 500
                // alert ("Ha comprado ha: Mengano")
                // alert (`su saldo es de: ${saldo}`)
            }
            else {
                alert("Saldo insuficiente")
            }
    /*
    personajes = parseInt(prompt(`Nuestra lista de personajes:
    1 - Mengano (500$)
    2 - Pablito (600$)
    3 - Fulano (700$)
    4 - Menganito (900$)
    5 - Messi (2000$)
    0 - para salir
    `))
    
    while ((personajes >= 6)) {
        personajes = parseInt(prompt("Ingrese un numero correcto"))
    }
    */
    
    //compra
    /*


    if (personajes == 2) {
        if (saldo >= 600) {
            saldo = saldo - 600
            alert ("Ha comprado ha: Pablito")
            alert (`su saldo es de: ${saldo}`)
        }
        else {
            alert("Saldo insuficiente")
        }
    }

    if (personajes == 3 ) {
        if (saldo >= 700) {
            saldo = saldo - 700
            alert ("Ha comprado ha: Fulano")
            alert (`su saldo es de: ${saldo}`)    
        }
        else {
            alert("Saldo insuficiente")
        }
    }

    if (personajes == 4) {
        if (saldo >= 900) {
            saldo = saldo - 900
            alert ("Ha comprado ha: Menganito")
            alert (`su saldo es de: ${saldo}`)
        }else {
            alert("Saldo insuficiente")
        }
    }

    if (personajes == 5) {
        if (saldo >= 2000) {
            saldo = saldo - 2000
            alert ("Ha comprado ha: Messi")
            alert (`su saldo es de: ${saldo}`)
        } else {
            alert("Saldo insuficiente")
        }
    } 
}
*/
/*
alert (`Terminamos, su saldo es de ${saldo}`);
*/