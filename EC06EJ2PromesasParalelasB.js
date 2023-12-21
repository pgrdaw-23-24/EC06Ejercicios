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
const BUSCADO = ['resource1', 'resource2', 'resource3']
let obtenido = []

function obtenerRecurso(recurso) {
    return new Promise((resolve, reject) => {
        asyncRequest(recurso, resolve)
    })
}

function mostrarRecurso(i) {
    if (obtenido[i]) {
        // comprobar que todos los recursos anteriores están disponibles
        let imprimir = true
        for (let j = 0; j < i; j++) {
            if (!obtenido[j]) {
                imprimir = false
                break
            }
        }
        // imprimir este recurso y los siguientes disponibles
        if (imprimir) {
            console.log(obtenido[i])
            mostrarRecurso(i + 1)       
        }
    }
}

for (let i = 0; i < BUSCADO.length; i++) {
    obtenerRecurso(BUSCADO[i])
        .then((recurso) => {
            obtenido[i] = recurso
            mostrarRecurso(i)
        })
}

