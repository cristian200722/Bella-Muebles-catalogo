const botones = document.querySelectorAll(".ver-mas");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const info = boton.nextElementSibling;

        if(info.style.display === "block"){
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }

    });

});