let buttonNode = document.querySelector("#btn");

buttonNode.addEventListener("click", changeSize);

function changeSize() {
  let gridMaxLimit = 64;
  let gridMinLimit = 1;
  let userGridSize = prompt("Enter Grid Size < 64");
  if (userGridSize < gridMaxLimit && userGridSize > gridMinLimit) {
    removeDiv();
    createDiv(userGridSize);
  } else {
    alert("Grid Size Value Error");
  }
}

function removeDiv() {
  let containerNode = document.querySelector(".container");
  let divsNode = document.querySelectorAll(".box");
  divsNode = Array.from(divsNode);
  divsNode.forEach((div) => {
    containerNode.removeChild(div);
  });
}
createDiv(16);
//create 16 x 16 div grid
function createDiv(Size) {
  let gridSize = Size;
  let gridSizeSquare = gridSize * gridSize;

  let containerNode = document.querySelector(".container");
  containerNode.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
  containerNode.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
  for (let i = 0; i < gridSizeSquare; i += 1) {
    let divNode = document.createElement("div");
    divNode.classList.add("box");
    divNode.addEventListener("mouseover", changeColor);
    containerNode.appendChild(divNode);
  }
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
