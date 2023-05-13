const screenOne = document.querySelector(".screen__one");
const sceenTwo = document.querySelector(".screen__two");

const randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;

function handleTryClick(e) {
    e.preventDefault();

    const inptNumber = document.querySelector("#inptNumber");
    
    if(inptNumber.value == randomNumber) {
        document.querySelector(".screen__one").classList.add("hide");
        document.querySelector(".screen__two").classList.remove("hide");
        sceenTwo.querySelector("h2").innerText = `Acertou em ${xAttemps} tentativas`;
    }

    inptNumber.value = "";
    xAttemps++
}


const btnTry = document.querySelector("#btn-try");
const btnReset = document.querySelector("#btn-reset");

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function() {
    screenOne.classList.remove("hide")
    sceenTwo.classList.add("hide")
    xAttemps = 1;
})

