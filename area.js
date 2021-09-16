const heightInput = document.querySelector("#height");
const baseInput = document.querySelector("#base");
const txtOutput = document.querySelector("#para");
const button = document.querySelector("#btn");

button.addEventListener("click",clickHandler);

function clickHandler(){
    var heightLength = Number(heightInput.value);
    var baseLength = Number(baseInput.value);
    if(heightLength === 0 || baseLength === 0){
        showMessage("Enter both values");
    }else{
        showMessage("The area is: " + calculateArea(heightLength,baseLength));
    }
}
function calculateArea(height, base){
    return 0.5 * height * base;
}
function showMessage(msg){
    txtOutput.innerText = msg
}