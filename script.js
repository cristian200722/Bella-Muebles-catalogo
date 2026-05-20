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

            }else{

                producto.style.display = "none";

            }

        });

    });

});