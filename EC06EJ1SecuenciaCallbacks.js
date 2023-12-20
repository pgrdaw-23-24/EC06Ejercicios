/*
1.EJERCICIO 1: CALLBACKS SECUENCIALES
Utilizando la función asyncRequest() realiza de forma secuencial peticiones para obtener
recurso1, recurso2 y recurso3, en ese orden. Cuando hayas obtenido los tres recursos debes
imprimir “¡Completado!” en la consola.
 */

const asyncRequest = require('./asyncRequest')

//Usando cascada de callbacks
asyncRequest('resource1', (recurso) => {
    console.log(recurso)
    asyncRequest('resource2', (recurso) => {
        console.log(recurso)
        asyncRequest('resource3', (recurso) => {
            console.log(recurso)
            console.log('¡Completado!')
        })
    })
})
