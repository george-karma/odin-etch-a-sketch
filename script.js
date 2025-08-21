const container = document.querySelector("#draw_area");
const slider = document.querySelector("#slider");
const gridSizeLabel = document.querySelector("#gridSizeLabel");
const drawableAreaSizeInPixels = 500

slider.addEventListener("input", (event) => {
    let numberOfSquaresPerSide = event.target.value;
    clearGrid()
    drawGrid(numberOfSquaresPerSide)
    updateGridLabel(numberOfSquaresPerSide)
});

function clearGrid() {
    container.innerHTML = "";
}

function updateGridLabel(numberOfSquaresPerSide){
    gridSizeLabel.textContent = numberOfSquaresPerSide
}

function drawGrid(numberOfSquaresPerSide) {
    let totalNumberOfSquares = Math.pow(numberOfSquaresPerSide, 2)
    let individualSquareArea = drawableAreaSizeInPixels / numberOfSquaresPerSide

    for (let i = 0; i < totalNumberOfSquares; i++) {
        let paintableSquare = document.createElement("div")
        paintableSquare.style.height = `${individualSquareArea}px`
        paintableSquare.style.width = `${individualSquareArea}px`
        paintableSquare.style.boxSizing = "border-box"

        paintableSquare.addEventListener("mouseenter", (e) => {
            e.target.style.background = "black"
        });


        container.append(paintableSquare)
    }
}

drawGrid(16)