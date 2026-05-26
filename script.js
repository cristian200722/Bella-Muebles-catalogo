document.addEventListener("click", (e) => {

    const btn = e.target.closest(".ver-mas");
    if(!btn) return;

    const card = btn.closest(".card");
    if(!card) return;

    // toggle solo de esta card
    card.classList.toggle("active");

    // cambiar texto
    if(card.classList.contains("active")){
        btn.textContent = "Ver menos";
    }else{
        btn.textContent = "Ver más";
    }

});


/* ===== FILTRO CATEGORIAS ===== */

const botones = document.querySelectorAll(".botones-categorias button");

const productos = document.querySelectorAll(".card");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const filtro = boton.dataset.filtro;

        productos.forEach(producto => {

            if(
                filtro === "todos" ||
                producto.dataset.categoria === filtro
            ){

                producto.style.display = "block";

                // reiniciar animación
                producto.style.animation = "none";

                producto.offsetHeight; // fuerza reflow

                producto.style.animation = "aparecer 0.6s ease";

            }else{

                producto.style.display = "none";

            }

        });

    });

});
const toggleCategorias = document.querySelector('.toggle-categorias');
const categorias = document.querySelector('.botones-categorias');
const iconoCategorias = document.querySelector('.toggle-categorias i');

toggleCategorias.addEventListener('click', () => {

    categorias.classList.toggle('activo');

    iconoCategorias.classList.toggle('fa-chevron-down');
    iconoCategorias.classList.toggle('fa-chevron-up');

});
const modal = document.getElementById('modalImagen');
const imagenGrande = document.getElementById('imagenGrande');
const cerrarModal = document.querySelector('.cerrar-modal');

const imagenes = document.querySelectorAll('.card img');

imagenes.forEach(img => {

    img.addEventListener('click', () => {

        modal.classList.add('activo');

        imagenGrande.src = img.src;

    });

});

cerrarModal.addEventListener('click', () => {

    modal.classList.remove('activo');

});

modal.addEventListener('click', (e) => {

    if(e.target === modal){
        modal.classList.remove('activo');
    }

});