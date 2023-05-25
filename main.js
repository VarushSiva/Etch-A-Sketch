let color = "black";

function makeGrid(size) {
  const grid = document.querySelector(".grid");
  let cells = grid.querySelectorAll("div");
  cells.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let cellCount = size*size;

  for (let i = 0; i < cellCount; i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", changeColor)
    cell.className = "cell";
    grid.appendChild(cell);
  }
};

makeGrid(16)

function changeSize(value) {
    if(value >= 2 && value <= 100) {
        makeGrid(value);
    } else {
        console.log("Please try a number between 2 and 100")
    }
}

function chooseColor(choice) {
    color = choice;
}

function changeColor() {
    if (color === "rgb") {
        this.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    }
    this.style.backgroundColor = color;
}

function resetGrid() {
  const grid = document.querySelector(".grid");
  let cells = grid.querySelectorAll("div");
  cells.forEach((div) => div.style.backgroundColor = "white");
}