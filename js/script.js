var login1 = document.getElementById('login1')
var login2 = document.getElementById('login2')
var loginUser = document.getElementById('loginUser')
var element1 = document.getElementById('text1')
var element2 = document.getElementById('text2')

function loggedIn() {
  if (localStorage.getItem('name')) {
    loginUser.innerHTML = localStorage.getItem('name')
    element1.style.visibility = 'hidden'
    element2.style.visibility = 'visible'
  }
}

loggedIn()

// function show() {

//   if (element1.style.visibility == 'hidden') {
//     element2.style.visibility = 'visible'
//   } else {
//     element2.style.visibility = 'hidden'
//   }


//   if (localStorage.getItem('name')) {
//     loginUser.innerHTML = localStorage.getItem('name')
//   }
// }

// function ocultar() {

//   if (element2.style.visibility == 'visible') {
//     element1.style.visibility = 'hidden'
//   } else {
//     element1.style.visibility = 'visible'
//   }
// }

// La propiedad de solo lectura localStorage te permite acceder al objeto localStorage
// los datos persisten almacenados entre las diferentes sesiones de navegacion
//Un objeto Storage que se puede utilizar para acceder al espacio de almacenamiento local del origen actual

// function iniciarSesion() {
//   var user = prompt('Ingresa tu nombre')


//   localStorage.setItem('name', user)

//   loginUser.innerHTML = user

// }

// function cerrarSesion() {
//   loginUser.innerHTML = ''
//   localStorage.clear()
//   // PARA LIMPIAR LA CACHE
// }

// login1.onclick = function () {
//   iniciarSesion()
// }

// login2.onclick = function () {
//   cerrarSesion()
// }


login1.onclick = function iniciarSesion() {
  var user = prompt('Ingresa tu nombre')


  localStorage.setItem('name', user)

  loginUser.innerHTML = user

  element1.style.visibility = 'hidden'
  element2.style.visibility = 'visible'
}

login2.onclick = function cerrarSesion() {
  loginUser.innerHTML = ''
  localStorage.clear()

  element1.style.visibility = 'visible'
  element2.style.visibility = 'hidden'

}