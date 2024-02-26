// ? BUSCAR EL BOTON Y LA IMAGEN EN EL DOCUMENTO PARA USARLOS
var imagen = document.getElementById("imagen")
var boton = document.getElementById("button")

// ? Función que genere el numero entre 1-99
function numeroAleatorio () {
  var numero = Math.floor(Math.random() * 99) + 1
  return numero
}

function crearLink () {
  var numero = numeroAleatorio()
  var link = "https://cdn2.thecatapi.com/images/b" + numero + ".jpg"
  return link
}

// ? Crear la interactividad
// CUando el usuario da clic a la boton, ejecutar la funcion crearlink
// y cambiar la imagen
function cambiarImagen () {
  var link = crearLink()
  imagen.src = link
}

boton.onclick = cambiarImagen
imagen.onerror = cambiarImagen
