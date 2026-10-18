
function configurarVerTodos(contenedorSelector, botonId, cantidadInicial) {
    const contenedor = document.querySelector(contenedorSelector);
    const boton = document.getElementById(botonId);

    if (!contenedor || !boton) return;

    const mascotas = Array.from(
        contenedor.querySelectorAll(".tarjeta-mascota")
    );

    mascotas.forEach((mascota, indice) => {
        if (indice >= cantidadInicial) {
            mascota.classList.add("mascota-oculta");
        }
    });

    boton.addEventListener("click", () => {
        const mostrandoTodas = boton.dataset.expandidas === "true";

        if (mostrandoTodas) {
            mascotas.forEach((mascota, indice) => {
                mascota.classList.toggle(
                    "mascota-oculta",
                    indice >= cantidadInicial
                );
            });

            boton.textContent = "Ver todos →";
            boton.dataset.expandidas = "false";
        } else {
            mascotas.forEach(mascota => {
                mascota.classList.remove("mascota-oculta");
            });

            boton.textContent = "Ver menos ↑";
            boton.dataset.expandidas = "true";
        }
    });
}

configurarVerTodos(".perritos .contenedor-mascotas", "ver-perritos", 3);
configurarVerTodos(".gatitos .contenedor-mascotas", "ver-gatitos", 3);


// ========================================
// BUSCADOR DE MASCOTAS
// ========================================

const formularioBusqueda = document.getElementById("form-busqueda");
const campoBusqueda = document.getElementById("buscar-mascota");

if (formularioBusqueda && campoBusqueda) {

    const todasLasMascotas = Array.from(
        document.querySelectorAll(".tarjeta-mascota")
    );

    const botonesVerTodos = [
        document.getElementById("ver-perritos"),
        document.getElementById("ver-gatitos")
    ].filter(Boolean);

    const textoOriginalBotones = botonesVerTodos.map(boton => ({
        boton,
        texto: boton.textContent
    }));

    function buscarMascotas() {
        const busqueda = campoBusqueda.value
            .trim()
            .toLocaleLowerCase("es");

        todasLasMascotas.forEach(mascota => {
            const contenido = mascota.textContent
                .toLocaleLowerCase("es");

            const coincide = contenido.includes(busqueda);

            mascota.classList.toggle("resultado-oculto", !coincide);
        });

        // Durante la búsqueda mostramos todas las coincidencias.
        // Fuera de la búsqueda, respetamos "Ver todos" y "Ver menos".
        textoOriginalBotones.forEach(({ boton, texto }) => {
            boton.textContent = texto;
            boton.dataset.expandidas = "false";
        });
    }

    campoBusqueda.addEventListener("input", buscarMascotas);

    formularioBusqueda.addEventListener("submit", evento => {
        evento.preventDefault();
        buscarMascotas();
    });
}
