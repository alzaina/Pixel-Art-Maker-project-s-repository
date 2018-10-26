// Select color input
const cellColor = document.querySelector('#colorPicker');
// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
// When size is submitted by the user, call makeGrid()
const form = document.querySelector('#sizePicker');
//add the addEventListener
form.children[2].addEventListener('click', makeGrid);
//get the table element
const table = document.querySelector('#pixelCanvas');
//call makeGrid function
function makeGrid() {
  //to reset the table
  if (table.childElementCount > 0){
    table.innerHTML = '';
  }
  //define #of cells
  const col = width.valueAsNumber;
  const row = height.valueAsNumber;
  //create the table
  for (let r = 1; r<= row; r++) {
    //create a table row
    const addTr = document.createElement('tr');
    for (let c = 1; c<= col; c++) {
      //create a table cell
      const addTd = document.createElement('td');
      //add cell to the row
      addTr.appendChild(addTd);
      //add event to each cell
      addTd.addEventListener('click', changeColor);
    }
    //add row to the tableElement
    table.appendChild(addTr);
  }

}
//change the color of a cell
function changeColor(eve){
  eve.target.style.backgroundColor = cellColor.value;
}
