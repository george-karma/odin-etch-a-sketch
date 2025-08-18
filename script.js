const container = document.querySelector("#draw_area");
const drawableAreaSizeInPixels = 500

let numberOfSquaresPerSide = 16
let totalNumberOfSquares = Math.pow(numberOfSquaresPerSide,2)
individualSquareArea = drawableAreaSizeInPixels/numberOfSquaresPerSide


for(let i = 0; i<totalNumberOfSquares; i++) {
    let paintableSquare = document.createElement("div")
    paintableSquare.style.height = `${individualSquareArea}px`
    paintableSquare.style.width  = `${individualSquareArea}px`
    paintableSquare.style.boxSizing = "border-box"
    paintableSquare.style.border = "solid blue 1px"

    paintableSquare.addEventListener("mouseenter", (e) =>{
        e.target.style.background = "black"
    });


    container.append(paintableSquare)
}