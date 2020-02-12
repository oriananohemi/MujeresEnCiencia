var login1 = document.getElementById('login1')
var login2 = document.getElementById('login2')
var loginUser = document.getElementById('loginUser')

function show() {
  var element = document.getElementById('text')

  if (element.style.visibility == 'hidden') {
    element.style.visibility = 'visible'
  } else {
    element.style.visibility = 'hidden'
  }


  if (localStorage.getItem('name')) {
    loginUser.innerHTML = localStorage.getItem('name')
  }
}

function ocultar() {
  var element = document.getElementById('text')

  if (element.style.visibility == 'visible') {
    element.style.visibility = 'hidden'
  } else {
    element.style.visibility = 'visible'
  }
}

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

}

login2.onclick = function cerrarSesion() {
  loginUser.innerHTML = ''
  localStorage.clear()
}