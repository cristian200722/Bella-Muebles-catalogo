const botonesVerMas = document.querySelectorAll(".ver-mas");

botonesVerMas.forEach(boton => {

    boton.addEventListener("click", () => {

        // buscar SOLO dentro de esta card
        const card = boton.parentElement;

        const info = card.querySelector(".info-producto");

        // toggle
        if(info.style.display === "block"){

            info.style.display = "none";
            boton.textContent = "Ver más";

        }else{

            info.style.display = "block";
            boton.textContent = "Ver menos";

        }

    });

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