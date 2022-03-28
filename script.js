let gridSize = 64

const cells = document.querySelectorAll('cell');
const colorPicker = document.getElementById('colorPicker');
const gridSizePicker = document.querySelector('option');
const resetButton = document.getElementById('reset');

window.onload = function() {
   for (i = 1; i <= (gridSize*gridSize); i++) {
      let d = document.createElement("div");
      const wrapper = document.querySelector('.wrapper');
      wrapper.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`
      wrapper.appendChild(d);
      d.className = 'cell';
      d.id = `${i}`;
      d.addEventListener('pointerover',
      e => e.target.style.background = colorPicker.value);
   }
}

function clearCanvas() {
   resetButton.addEventListener('click', () =>
   location.reload());
}

clearCanvas();