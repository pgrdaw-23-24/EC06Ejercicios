/*
3.EJERCICIO 3: CUTRIFETCH
Crea un módulo con una función llamada cutriFetch() que reciba como parámetro 
un nombrede recurso, llame a asyncRequest() y devuelva una promesa que se 
resuelva cuando se han obtenido los datos del recurso.
Realiza el ejercicio 1 utilizando esa nueva función
*/

const cutriFetch = require('./cutriFetch')

cutriFetch('resource1')
    .then((recurso) => console.log(recurso))
    .then(() => cutriFetch('resource2'))
    .then((recurso) => console.log(recurso))
    .then(() => cutriFetch('resource3'))
    .then((recurso) => console.log(recurso))
    .then(() => console.log('¡Completado!'))