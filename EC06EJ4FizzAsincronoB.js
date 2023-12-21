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
const FIZZ_MAX = 300
const DELAY_MIN = 100
const DELAY_MAX = 10000
let fizz_resultados = []
let impresos = 0

function divisible(divisor, dividendo) {
    return dividendo % divisor == 0
}

function contiene(contenido, continente) {
    return continente.toString().indexOf(contenido) != -1
}

function fizzDiferido(int, callback, min_delay = DELAY_MIN, max_delay = DELAY_MAX) {
    setTimeout(
        () => {
            if (divisible(3, int) || contiene('3', int)) {
                callback(true)
            } else {
                callback(false)
            }
        },
        min_delay + (Math.random() * (max_delay - min_delay))
    )
}

function fizz(int) {
    return new Promise((resolve, reject) => {
        fizzDiferido(int, (bool) => resolve(bool))
    })
}

function imprimirFizz(i) {
    while(impresos == i-1 && fizz_resultados[i]) {
        console.log(fizz_resultados[i])
        impresos++
        i++
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