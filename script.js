const botones = document.querySelectorAll(".ver-mas");

botones.forEach(boton=>{
    boton.addEventListener("click",()=>{
        const card = boton.closest(".card");
        const info = card.querySelector(".info-producto");

        if(!info) return;

        info.style.display =
        info.style.display==="block"
        ? "none"
        : "block";
    });
});