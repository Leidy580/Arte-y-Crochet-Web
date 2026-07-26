// ===============================
// ARTE Y CROCHET
// script.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Arte y Crochet cargado correctamente.");

    // ===============================
    // Scroll suave para enlaces internos
    // ===============================

    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(enlace => {

        enlace.addEventListener("click", function(e){

            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // ===============================
    // Mensaje del formulario
    // ===============================

    const formulario = document.querySelector("form");

    if(formulario){

        formulario.addEventListener("submit", function(e){

            e.preventDefault();

            alert("¡Gracias por contactarnos! Tu mensaje ha sido enviado.");

            formulario.reset();

        });

    }

});