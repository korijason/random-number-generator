const genNumber = document.getElementById("button");
const display = document.getElementById("numberSec");

genNumber.onclick = function () {
  let randomNum = Math.floor(Math.random() * 100);
  //console.log(randomNum);
  display.textContent = randomNum;
};

// function getNum (){
// let randomNum = Math.floor(Math.random() * 9)
// console.log(randomNum)
// display.textContent = randomNum
