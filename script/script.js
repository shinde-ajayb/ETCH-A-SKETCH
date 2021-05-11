//create 16 x 16 div grid

let gridSize = 16;
let gridSizeSquare = 16 * 16;

let containerNode = document.querySelector(".container");
containerNode.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
containerNode.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
for (let i = 0; i < gridSizeSquare; i += 1) {
  let divNode = document.createElement("div");
  divNode.classList.add("box");
  containerNode.appendChild(divNode);
}
