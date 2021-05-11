//create 16 x 16 div grid

let gridSize = 16;
let gridSizeSquare = 16 * 16;

let containerNode = document.querySelector(".container");
containerNode.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
containerNode.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
for (let i = 0; i < gridSizeSquare; i += 1) {
  let divNode = document.createElement("div");
  divNode.classList.add("box");
  divNode.addEventListener("mouseover", changeColor);
  containerNode.appendChild(divNode);
}

function changeColor(e) {
  e.target.style.backgroundColor = generateColor();
}

function generateColor() {
  let bgcolor = "";
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);

  bgcolor = `rgb(${red},${green},${blue})`;
  return bgcolor;
}
