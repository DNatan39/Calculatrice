let result = document.querySelector(".result")
let chiffre = document.querySelectorAll(".chiffre")
let operator = document.querySelectorAll(".operator")

document.querySelector(".boutonegal").addEventListener("click", function () {
    result.innerHTML = calcul(document.querySelector(".result").textContent);
})

document.querySelector(".boutondeletelast").addEventListener("click", function deletelast() {
    result.innerHTML = result.innerHTML.slice(0, -1);
})

document.querySelector(".boutonreset").addEventListener("click", function reset() {
    result.innerHTML = "0"
})
chiffre.forEach(function (i) {
    i.addEventListener('click', function () {
        if (result.innerHTML.length === 1 && result.innerHTML === "0") {
            document.querySelector('.result').innerHTML = i.innerHTML;
        }
        else{
            document.querySelector('.result').innerHTML += i.innerHTML;
        }
    })

})

operator.forEach(function (i) {
    i.addEventListener('click', function () {
        if (result.innerHTML === "") {
            return
        } else {
            document.querySelector('.result').innerHTML += i.innerHTML
        }
    })
})

document.querySelector(".virgule").addEventListener("click", function () {
    if (result.innerHTML === "") {
        result.innerHTML += "0."
    } else {
        result.innerHTML += "."
    }
})

function calcul(obj) {
    return Function('return ' + obj)();
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