console.log('Hello World!');
 
var obstacle1 = document.getElementById('obstacle1')
var character = document.getElementById('character')
var obstacle2 = document.getElementById('obstacle2')
var obstacle3 = document.getElementById('obstacle3')
var obstacle4 = document.getElementById('obstacle4')

function up() {
  character.classList.add('animation1')
  setTimeout(function () {
    character.classList.remove('animation1')
  },500)
  
}
function down() {
  character.classList.add('animation2')
  setTimeout(function () {
    character.classList.remove('animation2')
  },500)
  
}

var chackdead = setInterval(function () {
 
   
  var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
  var obstacle1left = parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left"))
   if (obstacle1left<20 && charactertop>0 && charactertop<=248) {
    alert('you lose')
    block.style.animation='none'
    block.style.display='none'
  }
},10)


 var chackdead2 = setInterval(function () {
 
   
  var charactertop2 = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
  var obstacle2left = parseInt(window.getComputedStyle(obstacle2).getPropertyValue("left"))
   if (obstacle2left<20 && charactertop2>0 && charactertop2<=292) {
    alert('you lose')
    block.style.animation='none'
    block.style.display='none'
    
  }
},10)
 var chackdead3 = setInterval(function () {
 
   
  var charactertop3 = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
  var obstacle3left = parseInt(window.getComputedStyle(obstacle3).getPropertyValue("left"))
   if (obstacle3left<20 && obstacle3left>0 && charactertop3>=272 ) {
    alert('you lose')
    block.style.animation='none'
    block.style.display='none'
  }
},10)


 
 
 
 