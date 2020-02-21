function validarFormulario() {
  var txtNombre = document.getElementById('name').value
  var txtTelefono = document.getElementById('telephone').value
  var txtCorreo = document.getElementById('email').value
  var txtMensaje = document.getElementById('message').value

  if (txtNombre == null || txtNombre.length == 0) {
    alert('ERROR: El campo nombre no debe ir vacio ni incompleto')
    return false;
  } else {
    // el metodo test() ejecuta una busqueda de coincidencias entre una expresion regular y una cadena especificada. Devuelve true o false
    if (/^(0-9)*$/.test(txtNombre)) {
      alert('Error: El campo nombre no debe contener numeros')
      return false
    } else {
      if (!(/^[A-Za-z\_\-\.\s\xF\xD1]+$/.test(txtNombre))) {
        alert('Error: El campo nombre no debe contener caracteres especiales')
        return false
      }
    }
  }
  if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(txtCorreo))) {
    // if (!(/^\w+([\.-])?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(txtCorreo))) {
    alert('Error: Debe escribir un correo valido')
    return false
  }

  if (txtTelefono == null || txtTelefono.length == 0) {
    alert('Error: El campo de telefono no debe ir vacio')
    return false
  } else {
    if (isNaN(txtTelefono)) {
      alert('Error: El telefono no debe llevar letras')
      return false
    }
  }

  if (txtMensaje == null || txtMensaje.length == 0) {
    alert('Error: El campo mensaje no debe ir vacio')
    return false
  }
  alert('formulario enviado')
  return true
} 