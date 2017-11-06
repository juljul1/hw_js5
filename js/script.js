//1
let div = document.querySelector('.coordin');

//Reed coorditates
let coordinateReader = function(e) {
  let rez = document.getElementById('coordsrez');
  rez.innerHTML = "Coordinates X : " + e.clientX + 
  ' , Coordinates Y: ' + e.clientY;
}

//Clear coordinates on mouseout
let coordinateCleaner = function(e) {
  let rezout = document.getElementById('coordsrez');
  rezout.innerHTML = "Cursor is not in focus";
}

div.addEventListener('mousemove', coordinateReader); //Reed coorditates
div.addEventListener('mouseout', coordinateCleaner); //Clear coordinates on mouseout

//2
//show hidden
showfirst.ondblclick = function(){
  let imgShow = document.getElementById('showfirst');
  let imgHidden = document.getElementById('hiddenimg');
  
  imgShow.style.display = 'none';
  imgHidden.style.display = 'block';
}
//hide shown
hiddenimg.ondblclick = function(){
  let imgShow = document.getElementById('showfirst');
  let imgHidden = document.getElementById('hiddenimg');
  
  imgShow.style.display = 'block';
  imgHidden.style.display = 'none';
}

// 3
  
  let create = document.querySelector('#create');
//crate 350 divs class createdDiv
  create.onclick = function createdivs() {
    let divs = document.querySelector('#resdiv');
      for (let x = 0; x < 350; x++) {
          let element = document.createElement('div');
          element.classList.add('createdDiv');
          divs.appendChild(element);
      }
      function crateCircle() {//func creates style borderRadius
          this.style.borderRadius = '50%';
      }

      function noRadius() {//func makes borderRadius 0
         this.style.borderRadius = '0%';
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
      parentdiv.style.backgroundSize = 'contain';
      }
  });

//5
let obj = document.getElementById("move");
obj.style.top = "0";

move.onclick = function(){
  var position = parseInt(obj.style.top);

  if (obj.style.top <= 0) {
  obj.style.top = "100px";
  console.log(position);
  }

  else{   
    obj.style.top = position + 100 + 'px' ;
  }
}

//6
var trigger =document.querySelector('#trig');
  trigger.style.left="0";
  trigger.onclick = function moveBlock() {
   var position =parseInt(trigger.style.left);
    if (position == 0) {
      trigger.style.left = 45 +'%';
      trigger.style.marginLeft="-25px";
      console.log(1);
      } 

    else if (position == 45) {
      trigger.style.left= '73%';
      trigger.style.marginLeft="0px";
      console.log(2);
      } 

    else {
      trigger.style.left= "0px";
      trigger.style.marginLeft="0px";
      console.log(0);
      }
  } 