// La fonction eval() permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.

var result = document.getElementById('output');
var caracteres = document.querySelectorAll('.caractere');
var supp = document.querySelectorAll('.supp');
var opperateur = document.querySelectorAll('.opperateur');
var egal = document.querySelector('.egal');
var boite = "";

caracteres.textContent = result.innerHTML;

for (let i = 0; i < caracteres.length; i++) {
    
    caracteres[i].addEventListener("click", function () {
        document.getElementById('output').innerHTML = "";
        boite += caracteres[i].textContent;
        document.getElementById('output').innerHTML = boite;
    })
}

for (let i = 0; i < supp.length; i++) {

    supp[i].addEventListener("click", function(){
        if (this.textContent === "AC"){
            document.getElementById('output').innerHTML = "0";
            boite = "";
        }
        else{
            document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.slice(0, -1);
        }
    })
}

for (let i = 0; i < opperateur.length; i++) {
    opperateur[i].addEventListener("click", function(){
        if (this.textContent === "/"){
            result.innerHTML += "/";
            boite = "";
        }
        else if (this.textContent === "*"){
            result.innerHTML += "*";
            boite = "";
        }
        else if (this.textContent === "-"){
            result.innerHTML += "-";
            boite = "";
        }
        else if (this.textContent === "+"){
            result.innerHTML += "+";
            boite = "";
        }
    })
}

for (let i = 0; i < egal.length; i++) {
    egal.addEventListener("click", function(){
        var caracteres = document.getElementById("output").innerHTML;
        var solved = eval(caracteres);
        document.getElementById("output").innerHTML=solved;
    })
}








// background Sakura
function rain() {
    let amount = 50;
    let body = document.querySelector('body');
    let i = 0;
    while (i < amount) {
        let drop = document.createElement('i');

        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;


        drop.style.width = 100 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';
        body.appendChild(drop);
        i++
    }
}

rain();