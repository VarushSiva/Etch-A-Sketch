function makeGrid(size) {
  const grid = document.querySelector(".grid");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let cellCount = size*size;

  for (let i = 0; i < cellCount; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
  }
};

makeGrid(18);