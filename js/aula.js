let nome  = "Jeferson"
// alert (nome)

console.log(nome);

const x = 10;
const lista = ["a", "b", "c"] 
const objeto = { name: "Jeferson", age:51 } //JSON

console.log(x);
console.log(typeof x);
console.log("------------------");

console.log(lista);
console.log(typeof lista);
console.log("------------------");

console.log(objeto);
console.log(typeof objeto);
console.log("------------------");

console.log(lista [2]);
console.log("------------------");

// CONDICIONAL

let opcao = true; //boolean

if (2 < 1){
    console.log("2 é maior que 1")
} else {
    console.log("Afirmação falsa")
}


// ESTRUTURA DE REPETIÇÃO

const arr = [ "amora", "banana", "caju", "damasco", "melão"];
for (let i = 0; i < arr.length; i++){
    // console.log("O valor da repetição é"  +arr[i])
    //tampleate literal: uso da crase ` `
    console.log(`O valor da repetição é  + ${arr[i]}`)
}

// FUNÇÃO
function soma(){
    console.log(22+11);
}
soma();

function calcula(a,b){
    console.log(a*b);
}
calcula (12,12)




// >>>>> Person Hardman

// DOM
// Navegar no documento HTML

// const brand = document.querySelector("#brand");
// console.log(brand);

// brand.addEventListener("click", function(event){
//     console.log("testando o click");
//     console.log(event.target);
//     event.target.style.color = "blue"
// });