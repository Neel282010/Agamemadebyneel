console.log('Hello World!');
var character =document.getElementById('character')
var obstacle1= document.getElementById('obstacle1')
var obstacle2= document.getElementById('obstacle2')
var obstacle3= document.getElementById('obstacle3')
var obstacle4= document.getElementById('obstacle4')
var obstacle5= document.getElementById('obstacle5')
var obstacle6= document.getElementById('obstacle6')
var obstacle7= document.getElementById('obstacle7')
var obstacle8= document.getElementById('obstacle8')
var obstacle9= document.getElementById('obstacle9')
var obstacle10= document.getElementById('obstacle10')

function up() {
  character.classList.add('animation1')
  setTimeout(function() {
    character.classList.remove('animation1')
  },700)
}
function down() {
  character.classList.add('animation2')
  setTimeout(function() {
    character.classList.remove('animation2')
  },700)
}
var checkdead1 = setInterval(function () {
  var character1top = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
  var obstacle1left = parseInt(window.getComputedStyle(obstacle1).getPropertyValue('left'))

  if (obstacle1left<20 && obstacle1left>0 && character1top>=300) {
    alert('you lose')
  }
},10)
var checkdead2 = setInterval(function () {
  var character3top = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
  var obstacle3left = parseInt(window.getComputedStyle(obstacle3).getPropertyValue('left'))
  
  if (obstacle3left<20 && obstacle3left>0 && character3top<=330) {
    alert('you lose')
  }
},10)

var checkdead3 = setInterval(function () {
  var character4top = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
  var obstacle4left = parseInt(window.getComputedStyle(obstacle5).getPropertyValue('left'))
  if (obstacle4left<20 && obstacle4left>0 && character4top<=300) {
    alert('you lose')
  }
},10)

var checkdead4 = setInterval(function () {
  var character5top = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
  var obstacle5left = parseInt(window.getComputedStyle(obstacle6).getPropertyValue('left'))
  if (obstacle5left<20 && obstacle5left>0 && character5top>=360) {
    alert('you lose')
  }
},10)

var checkdead5 = setInterval(function () {
  var character6top = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
  var obstacle6left = parseInt(window.getComputedStyle(obstacle7).getPropertyValue('left'))
  if (obstacle6left<20 && obstacle6left>0 && character6top>=300) {
    alert('you lose')
  }
},10)

var checkdead6 = setInterval(function () {
  var character7top = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
  var obstacle7left = parseInt(window.getComputedStyle(obstacle9).getPropertyValue('left'))
  if (obstacle7left<20 && obstacle7left>0 && character7top<=320) {
    alert('you lose')
  }
},10)
      
