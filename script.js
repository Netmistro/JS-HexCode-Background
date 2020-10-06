const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexBtn = document.querySelector(".hexBtn");
const bodyCFG = document.querySelector("body");
const hexText = document.querySelector(".hex");

hexBtn.addEventListener("click", getHex);

function getHex() {
  let hexCol = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexCol += hexNumbers[random];
  }
  bodyCFG.style.backgroundColor = hexCol;
  hexText.innerHTML = hexCol;
}
