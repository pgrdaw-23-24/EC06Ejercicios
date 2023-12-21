/*
Utilizando la función asyncRequest() realiza de forma simultánea 
peticiones para obtener recurso1, recurso2 y recurso3.
Debes imprimir el contenido de cada recurso en orden y lo antes posible. Cuando se hayan
obtenido los tres recursos debes imprimir “¡Completado!” en la consola.
Esto es un ejemplo de cómo se podrían recibir los datos y qué tendría que imprimirse por pantalla:
Datos recibidos Impreso en consola
resource2 (No se imprime nada ya que aún no tenemos
el resultado de resource1)
resource1 The first resource
The second resource
resource3 The third resource
¡Completado!
*/

const asyncRequest = require('./asyncRequest')

function obtRecurso(recurso) {
    return new Promise((resolve, reject) => {
        asyncRequest(recurso, resolve)
    })
}

Promise.all([
    obtRecurso('resource1'),
    obtRecurso('resource2'),
    obtRecurso('resource3'),
])
    .then((data) => console.log(data))