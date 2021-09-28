const firstAngleInput = document.querySelector("#first-angle");
const secondAngleInput = document.querySelector("#second-angle");
const thirdAngleInput = document.querySelector("#third-angle");
const button = document.querySelector("#btn");
const txtOutput = document.querySelector("#para");

button.addEventListener("click", clickHandler);

function clickHandler() {
    var firstAngle = Number(firstAngleInput.value);
    var secondAngle = Number(secondAngleInput.value);
    var thirdAngle = Number(thirdAngleInput.value);
    // console.log(calculateSum(firstAngle,secondAngle,thirdAngle));

    if (firstAngle === 0 || secondAngle === 0 || thirdAngle === 0) {
        showMessage("Enter all sides");
    } else if (firstAngle < 0 || secondAngle < 0 || thirdAngle < 0) {
        showMessage("Enter valid values");
    }
    else if (calculateSum(firstAngle, secondAngle, thirdAngle) === 180) {
        showMessage("Valid Triangle");
    } else {
        showMessage("Invalid Triangle");
    }
}
function calculateSum(angleOne, angleTwo, angleThree) {
    return angleOne + angleTwo + angleThree;
}
function showMessage(msg) {
    txtOutput.textContent = msg;
}