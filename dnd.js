let dragged = null;
let lastSortable = null;

let container = document.querySelector(".container");
console.log(container);

let draggables = container.querySelectorAll(".draggable");
console.log(draggables);

draggables.forEach((element) => {
    element.addEventListener("dragstart", (event) => {
      dragged = event.target;
    });
  
    element.addEventListener("drag", (event) => {
      event.target.classList.add("dragging");
      
      // Element über das gedragged wird
      let el = document.elementFromPoint(event.clientX, event.clientY);

        if(el.classList.contains("draggable")){
            lastSortable = el;
        }

        let lastSortableAnchor = lastSortable.offsetLeft + lastSortable.offsetWidth / 2;
        
        // eventuell umdrehen
        if(event.clientX > lastSortableAnchor) {
          lastSortable.after(event.target);
        }else{
          event.target.parentNode.insertBefore(event.target, lastSortable);
        }
    });
  
    element.addEventListener("dragend", (event) => {
      event.target.classList.remove("dragging");
    });
  
    element.addEventListener("drop", (event) => {
      event.target.classList.remove("dragging");
    });
  });



container.addEventListener("dragover", (event) => {
  event.preventDefault();
});


container.addEventListener("drop", (event) => {

});


onDragStart = (event) => {

};

onDrag = (event) => {

};

onDragEnd = (event) => {

};

onDrop = (event) => {

};
