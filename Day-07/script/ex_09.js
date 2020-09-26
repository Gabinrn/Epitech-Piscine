var draggabl = document.querySelector('canvas');
var dropabl = document.getElementsByTagName("div")[2];


draggabl.setAttribute('draggable', true);
draggabl.setAttribute('ondragstart', 'onDragStart(event)');
draggabl.setAttribute('ondragover', 'onDragOver(event)');
draggabl.setAttribute('ondrop', 'onDrop(event)');


function onDragStart(event) {
  event.currentTarget.style.backgroundColor = 'red';
  event.dataTransfer.setData('text/html', event.target.id);


}

function onDragOver(event) {
  event.preventDefault(true);
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    event.target.appendChild(draggableElement);
    event.dataTransfer.clearData();
}
