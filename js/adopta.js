function mostrarMascotas(seccion, boton) {
    const contenedor = document.getElementById(seccion);
    const ocultas = contenedor.querySelectorAll(".oculto");

    ocultas.forEach(function (mascota) {
        mascota.classList.remove("oculto");
    });

    boton.style.display = "none";
}

function configurarVerTodos(contenedorSelector, botonId, cantidadInicial) {
    const contenedor = document.querySelector(contenedorSelector);
    const boton = document.getElementById(botonId);

    if (!contenedor || !boton) return;

    const mascotas = Array.from(contenedor.querySelectorAll(".tarjeta-mascota"));

    mascotas.forEach((mascota, indice) => {
        if (indice >= cantidadInicial) {
            mascota.classList.add("mascota-oculta");
        }
    });

    boton.addEventListener("click", () => {
        const ocultas = mascotas.some(mascota =>
            mascota.classList.contains("mascota-oculta")
        );

        mascotas.forEach(mascota => {
            mascota.classList.remove("mascota-oculta");
        });

        if (ocultas) {
            boton.textContent = "Ver menos ↑";
        } else {
            mascotas.forEach((mascota, indice) => {
                if (indice >= cantidadInicial) {
                    mascota.classList.add("mascota-oculta");
                }
            });

            boton.textContent = "Ver todos →";
            contenedor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

configurarVerTodos(".perritos .contenedor-mascotas", "ver-perritos", 4);
configurarVerTodos(".gatitos .contenedor-mascotas", "ver-gatitos", 4);