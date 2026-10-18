
const formulario = document.querySelector(".formulario form");
const mensajeExito = document.getElementById("mensaje-exito");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Verifica que los campos obligatorios estén completos
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    // Muestra el mensaje de éxito
    mensajeExito.hidden = false;

    // Limpia los campos del formulario
    formulario.reset();
});
