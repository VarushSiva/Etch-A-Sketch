const grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
grid.style.gridTemplateRows = `repeat(16, 1fr)`;

for (let i = 0; i < 256; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
}