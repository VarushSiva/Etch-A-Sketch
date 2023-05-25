function makeGrid(size) {
  const grid = document.querySelector(".grid");
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

makeGrid(16);

function changeColor() {
    this.style.backgroundColor = "black";
}