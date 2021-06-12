window.onload = function () {
    newGrid(15);

  
  const squaregrid = document.querySelector('.squaregrid');    

  function newGrid(size) {
    createGrid(size);
    fillColor();
    clearDrawing();
    changeGridSize();

    if (size === 30) {
      squaregrid.style.gridTemplateColumns = `repeat(30, auto)`;
    } else if (size === 50) {
      squaregrid.style.gridTemplateColumns = `repeat(50, auto)`;
    } else {
      clearDrawing();
    }
  }

  function createGrid(size) {
    for (i = 0; i < size * size; i++) {
    const squaregrid = document.querySelector('.squaregrid');
    
    const div = document.createElement('div');
    div.classList.add('singlesquare');
  
    squaregrid.appendChild(div);
    }
  }

  function fillColor() {
    let singlesquare = document.querySelectorAll('.singlesquare');
  
    for (i = 0; i < singlesquare.length; i++) {
      singlesquare[i].addEventListener('mouseover', changeColor);
    }
  }

  function changeColor(e) {
    const randomColor = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let h = randomColor(0, 360);
    let s = randomColor(50, 100);
    let l = randomColor(70, 100);

    e.target.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
  }
  
  function clearDrawing() {
    let button = document.querySelector('.button');
  
    const refreshPage = () => {
      location.reload();
    }

    button.addEventListener('click', refreshPage)
  }
  
  function removeDivs() {
    while (squaregrid.firstChild) {
      squaregrid.removeChild(squaregrid.firstChild);
    }
  }

  function changeGridSize() {
    let biggerGrid = document.querySelector('.biggerGrid');
    let biggestGrid = document.querySelector('.biggestGrid');

    biggerGrid.addEventListener('click', function() {
      removeDivs();
      newGrid(30);
    });

    biggestGrid.addEventListener('click', function() {
      removeDivs();
      newGrid(50);
    });
  }
}