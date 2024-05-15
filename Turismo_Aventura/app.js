var nombre = document.getElementById("nombre");
var rut = document.getElementById("rut");
var apellido_paterno = document.getElementById("apellido_paterno");
var apellido_materno = document.getElementById("apellido_materno");
var celular=document.getElementById("celular");
var errorNombre = document.getElementById("errorNombre");
var errorRut = document.getElementById("errorRut");
var errorApellidoPaterno = document.getElementById("errorApellidoPaterno");
var errorApellidomaterno = document.getElementById("errorApellidomaterno");
var erroredad=document.getElementById("erroredad");
var errorcelular=document.getElementById("errorcelular");
var hoy = new Date(); 

function calcularEdad(fechanacimiento) {
    var fechaNacimiento = new Date(fechanacimiento); 
    if (isNaN(fechaNacimiento.getTime())) {
        return NaN; // Devuelve NaN si la fecha es inválida
    }
    var diferenciaTiempo = hoy.getTime() - fechaNacimiento.getTime();

 
    var edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));

    console.log("Edad calculada:", edad); 
    return edad;
}

function enviarformulario() {
    console.log('enviando formulario');
    errorNombre.textContent = "";
    errorRut.textContent = "";
    errorApellidoPaterno.textContent = "";
    erroredad.textContent = "";
    errorcelular.textContent = "";
    var mensajerror = [];
    var fechaNacimientoValor = document.getElementById("edad").value;
    var edad = calcularEdad(fechaNacimientoValor);
    if (rut.value.length < 9 || rut.value.length > 10) {
        mensajerror.push("El rut debe contener entre 9 a 10 caracteres");
        errorRut.textContent = "El rut debe contener entre 9 a 10 caracteres";
    }

    if (nombre.value.length < 3 || nombre.value.length > 20) {
        mensajerror.push("El nombre debe contener entre 3 a 20 caracteres");
        errorNombre.textContent = "El nombre debe contener entre 3 a 20 caracteres";
    }

    if (nombre.value === null || nombre.value === "") {
        mensajerror.push("Ingresa tu nombre");
        errorNombre.textContent = "Ingresa tu nombre";
    }

    if (apellido_paterno.value.length < 3 || apellido_paterno.value.length > 20) {
        mensajerror.push("El apellido paterno debe contener entre 3 a 20 caracteres");
        errorApellidoPaterno.textContent = "El apellido paterno debe contener entre 3 a 20 caracteres";
    }

    if (apellido_paterno.value === null || apellido_paterno.value === "") {
        mensajerror.push("Ingresa tu apellido paterno");
        errorApellidoPaterno.textContent = "Ingresa tu apellido paterno";
    }

    if (apellido_materno.value.length < 3 || apellido_materno.value.length > 20) {
        mensajerror.push("El apellido materno debe contener entre 3 a 20 caracteres");
        errorApellidomaterno.textContent = "El apellido materno debe contener entre 3 a 20 caracteres";
    }

    if (apellido_materno.value === null || apellido_materno.value === "") {
        mensajerror.push("Ingresa tu apellido materno");
        errorApellidomaterno.textContent = "Ingresa tu apellido materno";
    }

    if (isNaN(edad)) {
        mensajerror.push("Ingresa una fecha de nacimiento válida");
        erroredad.textContent = "Ingresa una fecha de nacimiento válida";
    } else if (edad < 18 || edad > 35) {
        mensajerror.push("Usted debe tener entre 18 a 35 años");
        erroredad.textContent = "Usted debe tener entre 18 a 35 años";
    }

    if (celular.value.length < 9 || celular.value.length > 12) {
        mensajerror.push("Su numero debe contener entre 9 a 12 dígitos");
        errorcelular.textContent = "Su numero debe contener entre 9 a 12 dígitos";
    }

    if (celular.value === null || celular.value === "") {
        mensajerror.push("Ingrese su numero de teléfono");
        errorcelular.textContent = "Ingrese su numero de teléfono";
    }


    if (mensajerror.length > 0) {
        return false;
    }
    return true; 
}