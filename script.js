const form = document.getElementById('miFormulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const inputEdad = document.getElementById('edad');
const inputPais = document.getElementById('pais');
const inputTerminos = document.getElementById('terminos');

const errorNombre = document.getElementById('error-nombre');
const errorEmail = document.getElementById('error-email');
const errorEdad = document.getElementById('error-edad');
const errorPais = document.getElementById('error-pais');
const errorTerminos = document.getElementById('error-terminos');

form.addEventListener('submit', function(e) {
    let hayErrores = false;

    if (inputNombre.value.trim().length < 5) {
        errorNombre.style.display = 'block';
        hayErrores = true;
    } else {
        errorNombre.style.display = 'none';
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(inputEmail.value.trim())) {
        errorEmail.style.display = 'block';
        hayErrores = true;
    } else {
        errorEmail.style.display = 'none';
    }

    const edadValor = parseInt(inputEdad.value);
    if (isNaN(edadValor) || edadValor < 18 || edadValor > 60) {
        errorEdad.style.display = 'block';
        hayErrores = true;
    } else {
        errorEdad.style.display = 'none';
    }

    if (inputPais.value === "") {
        errorPais.style.display = 'block';
        hayErrores = true;
    } else {
        errorPais.style.display = 'none';
    }

    if (!inputTerminos.checked) {
        errorTerminos.style.display = 'block';
        hayErrores = true;
    } else {
        errorTerminos.style.display = 'none';
    }


    if (hayErrores) {
        e.preventDefault(); 
    }
});