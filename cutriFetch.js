/*
3.EJERCICIO 3: CUTRIFETCH
Crea un módulo con una función llamada cutriFetch() que reciba como parámetro 
un nombrede recurso, llame a asyncRequest() y devuelva una promesa que se 
resuelva cuando se han obtenido los datos del recurso.
Realiza el ejercicio 1 utilizando esa nueva función
*/

const asyncRequest = require('./asyncRequest')

function cutriFetch(recurso) {
    return new Promise((resolve, reject) => {
        asyncRequest(recurso, resolve)
    })
}

module.exports = cutriFetch;
