/*
4.EJERCICIO 4: FIZZ ASÍNCRONO
Crea una función llamada fizz() que devuelva si un número es divisible por 3 o contiene un 3.
Sin embargo, debe devolver ese resultado al cabo de un tiempo aleatorio entre 100 y 10.000 ms
(puedes reducir este número mientras estás probando el ejercicio)
Imprime los números del 1 al 300. Si fizz() devuelve false debes imprimir el número. Si
fizz() devuelve true, debes imprimir “fizz” en lugar del número.
Debes imprimir los números en orden pero tan rápido como puedas.
*/


const FIZZ_MIN = 1
const FIZZ_MAX = 100
let fizz_resultados = []

function divisiblePor(divisor, dividendo) {
    return dividendo % divisor == 0
}

function contiene(contenido, continente) {
    return continente.toString().indexOf(contenido) != -1
}

function fizzInmediato(int) {
    return (divisiblePor(3, int) || contiene('3', int)) ? 'fizz' : int
}

function fizzDiferido(int, callback) {
    const MIN_DELAY = 100
    const MAX_DELAY = 10000
    setTimeout(
        () => {
            if (divisiblePor(3, int) || contiene('3', int)) {
                callback(true)
            } else {
                callback(false)
            }
        },
        MIN_DELAY + (Math.random() * (MAX_DELAY - MIN_DELAY))
    )
}

function fizz(int) {
    return new Promise((resolve, reject) => {
        fizzDiferido(int, (bool) => resolve(bool))
    })
}

function imprimirFizz(i) {
    let imprimir = true
    for (let j = FIZZ_MIN; j < i; j++) {
        if (!fizz_resultados[j]) {
            imprimir = false
            break
        }
    }
    // imprime si todos los fizz anteriores existen
    // y después intenta imprimir el siguiente fizz
    if (imprimir) {
        console.log(fizz_resultados[i])
        imprimirFizz(i + 1)
    }
}

// PROGRAMA PRINCIPAL
for (let i = FIZZ_MIN; i <= FIZZ_MAX; i++) {
    fizz(i)
        .then((bool) => {
            if (bool) {
                fizz_resultados[i] = 'fizz'
            } else {
                fizz_resultados[i] = i
            }
            imprimirFizz(i)
        })
}