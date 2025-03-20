const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

// FECHA MENU APÓS CLICAR NAS OPCÇÕES DO MENU SANDUICHE
const header = document.querySelector('#mobile-navbar [href="#header"]' );
const exprtise = document.querySelector('#mobile-navbar [href="#expertise-areas"]' );
const about = document.querySelector('#mobile-navbar [href="#about"]' );
const team = document.querySelector('#mobile-navbar [href="#team"]' );
const contact = document.querySelector('#mobile-navbar [href="#contact"]' );

// SELECIONAR OS ELEMENTOS DOS SLIDES
const slides = document.querySelectorAll(".banner");


const dots = document.querySelectorAll(".dot");

// VARIAVES DE CONTROLE 
let slidesIndex = 1;

function showSlides(){
    // console.log(slides)
    for(let i=0; i < slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }

    slidesIndex++; //avançando a variavel
    if(slidesIndex > slides.length){
        slidesIndex = 1;
    }

    slides[slidesIndex -1].classList.add("active")
    dots[slidesIndex -1].classList.add("active")
      
    setTimeout(showSlides, 3000)
}


// ATIVAR MENU MOBILE 

// ARROW FUNCTION
// () = > {
// }

// menuBtn.addEventListener("click", (e) =>{
//     menu.classList.add("menu-active")
// } )

// closeMenuBtn.addEventListener("click", (e) =>{
//     menu.classList.remove("menu-active")
// } )

[menuBtn, closeMenuBtn].forEach ((btn) => {
    btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active")
    })
})

// about.addEventListener("click", (e) =>{
//     menu.classList.remove("menu-active")
// } )

// header.addEventListener("click", (e) =>{
//     menu.classList.remove("menu-active")
// } )

// expertise.addEventListener("click", (e) =>{
//     menu.classList.remove("menu-active")
// } )

// team.addEventListener("click", (e) =>{
//     menu.classList.remove("menu-active")
// } )
// contact.addEventListener("click", (e) =>{
//     menu.classList.remove("menu-active")
// } )


// INICIALIZAÇÃO 
showSlides()



