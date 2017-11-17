//1
const div = document.querySelector('.coordin');
let rez = document.getElementById('coordsrez');
//Reed coorditates

let coordinateReader = function(e) {
  rez.innerHTML = "Coordinates X : " + e.clientX + 
  ' , Coordinates Y: ' + e.clientY;
}

//Clear coordinates on mouseout
let coordinateCleaner = function() {
  rez.innerHTML = "Cursor is not in focus";
}

div.addEventListener('mousemove', coordinateReader); //Reed coorditates
div.addEventListener('mouseout', coordinateCleaner); //Clear coordinates on mouseout

//2
//show hidden
let imgShow = document.querySelector('.secondshow');

function showfirst(){
  imgShow.classList.toggle('show');
}
imgShow.addEventListener('dblclick', showfirst);

// 3
//crate 350 divs class createdDiv
create.onclick = function createdivs() {
  
  function crateCircle() {
    this.classList.add('rounded-borders');
  }
    
  function noRadius() {//func makes borderRadius 0
    this.classList.remove('rounded-borders');
  }

  let divs = document.querySelector('#resdiv');
    for (let x = 0; x < 350; x++) {
      let element = document.createElement('div');
      element.classList.add('createdDiv');
      divs.appendChild(element);
    }

  let block = document.querySelectorAll('.createdDiv');//find div
      block.forEach(function(elem) { //create/remove circle
        elem.addEventListener('mouseover', crateCircle);
        elem.addEventListener('mouseout', noRadius);
      });
  }

//clear all divs
  clear.onclick = function(){
    let parent = document.getElementById("resdiv");
    let child = document.querySelectorAll(".createdDiv");
        child.forEach(function(elem) {
          parent.removeChild(elem);
        });
  }

//4
  let bgimg = document.querySelectorAll('.bgimg');
  bgimg.forEach(function(elem){
    let path = elem.src.substr(-9);
    elem.onclick = function addBgImg() {
      let parentdiv = document.getElementById("big");
      parentdiv.style.backgroundImage = 'url(' + path + ')';
     }
  });

//5
let obj = document.getElementById("move");

move.onclick = function(){
  var position = parseInt(obj.style.top);

  if (obj.style.top <= 0) {
  obj.style.top = "100px";
  }else{   
    obj.style.top = position + 100 + 'px' ;
  }
}

//6
var trigger = document.querySelector('#trig');
var position = 0;

  trigger.onclick = function moveBlock() {
    if (position === 0) {
      trigger.style.marginLeft = 'auto';
      trigger.style.marginRight= 'auto';
      ++position;
    } else if (position === 1) {
      trigger.style.marginLeft= 'auto';
      trigger.style.marginRight= '0';
      ++position;
    } else {
      trigger.style.marginLeft= '0';
      trigger.style.marginRight= 'auto';
      position = 0;
      } 

    console.log(position);

  } 