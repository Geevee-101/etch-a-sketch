const container = document.querySelector('.container-main');
let canvasSize = 16;
let squareWidth = 1000/canvasSize - 1;
let squareHeight = squareWidth;

function renderCanvas() {
    for (let i=0; i<canvasSize; i++) {
        const row = document.createElement('div');
        row.classList.add('container-row');
        container.appendChild(row);
        for (let j=0; j<canvasSize; j++) {
            const content = document.createElement('div');
            content.classList.add('box');
            content.style.width = squareWidth + 'px';
            content.style.height = squareHeight + 'px';
            row.appendChild(content);
        }
    }

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            e.target.classList.remove('box');
            e.target.classList.add('box-draw');
        });
    });
}


// Setup / Reset
function setupCanvas() {
    canvasSize = prompt("Enter number of squares per side (limit : 100)");
    
    if (canvasSize > 100) {
        canvasSize = 100;
    } else if (canvasSize < 1) {
        canvasSize = 1;
    }

    squareWidth = 1000/canvasSize - 1;
    squareHeight = squareWidth;
    console.log(squareWidth);

    container.innerHTML = '';
    renderCanvas();
}

renderCanvas();
setup_button.addEventListener("click", setupCanvas);