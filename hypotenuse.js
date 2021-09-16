const baseInput = document.querySelector("#base");
const heightInput = document.querySelector("#height");
const btn = document.querySelector("#btn");
const txtOutput = document.querySelector("#para");

btn.addEventListener("click", clickHandler);

function clickHandler() {
    var baseLength = Number(baseInput.value);
    var heightLength = Number(heightInput.value);
    if(baseLength === 0 || heightLength === 0){
        showMessage("Enter both sides");
    }else{
        showMessage("The hypotenuse length is " + calculateHypotenuse(baseLength,heightLength));
    }
    
}
function showMessage(msg) {
    txtOutput.innerText = msg;
}
function calculateHypotenuse(base, height) {
    return Math.sqrt((base * base) + (height * height));
}