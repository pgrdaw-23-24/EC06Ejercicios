/*
1.EJERCICIO 1: CALLBACKS SECUENCIALES
Utilizando la función asyncRequest() realiza de forma secuencial peticiones para obtener
recurso1, recurso2 y recurso3, en ese orden. Cuando hayas obtenido los tres recursos debes
imprimir “¡Completado!” en la consola.
 */

const asyncRequest = require('./asyncRequest')

// Usando promesas
function obtRecurso(recurso) {
    return new Promise((resolve, reject) => {
        asyncRequest(recurso, (data) => {
            return resolve(data)
        })
    })
}

obtRecurso('resource1')
    .then(obtRecurso('resource2'))
    .then(obtRecurso('resource3'))
    .then(console.log('¡Completado!'))