const form = document.querySelector(".imcForm");
const weightInput = document.querySelector("#peso")
const heightInput = document.querySelector("#altura")
const formButton = document.querySelector(".formButton")
const container = document.querySelector(".container")
const invalidWeight = document.querySelector(".invalidWeight")
const invalidHeight = document.querySelector(".invalidHeight")
const validResult = document.querySelector(".validResult")
const imcSpan = document.querySelector(".imcSpan")
const resultSpan = document.querySelector(".resultSpan")

function imcResult(){

    invalidWeight.classList.add("invisible")
    invalidHeight.classList.add("invisible")
    validResult.classList.add("invisible")
    const weight = Number(weightInput.value)
    const height = Number(heightInput.value)
    const imc = (weight/(height**2)).toFixed(2)

    if (!weight || typeof weight !== "number") {
        invalidWeight.classList.remove("invisible")
    } else if (!height || typeof height !== "number") {
        invalidHeight.classList.remove("invisible")
    } else{
        imcSpan.innerHTML = imc
        resultSpan.innerHTML = decideResult(imc)
        validResult.classList.remove("invisible")
    }

}

function decideResult(imc){
    if (imc< 18.5) {
        return "Abaixo do peso"
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal"
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso"
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade grau 1"
    } else if (imc >= 34.9 && imc < 39.9) {
        return "Obesidade grau 2"
    } else{
        return "Obesidade grau 3"
    }
}
formButton.addEventListener("click", imcResult)
form.addEventListener("submit", (e)=>e.preventDefault())