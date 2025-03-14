// SELECIONAR OS ELEMENTOS DOS SLIDES
const slides = document.querySelectorAll(".banner");

const dots = document.querySelectorAll(".dot");

// VARIAVES DE CONTROLE 
let slidesIndex = 0;

function showSlides(){
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

// INICIALIZAÇÃO 
showSlides()



