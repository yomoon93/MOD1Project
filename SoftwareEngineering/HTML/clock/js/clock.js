window.addEventListener('DOMContentLoaded', documentLoaded, false);

var startTime;
var limite;
var temporizador;
var inputN

var limit;

// this allows us to press enter which is key 13 and its connected to clock

let startEnter = document.getElementById("min")  
startEnter.addEventListener("keyup",function(event){
    event.preventDefault();
    if(event.keyCode === 13){
      document.getElementById('sec').focus()
    }
  });
  
  
  var why = document.getElementById('sec')
  why.addEventListener('keyup',
  function(event) {
    event.preventDefault();
    if(event.keyCode === 13){
    botaoClicked()
 
    var slimit = document.getElementById("sec").value
var mlimit = document.getElementById("min").value
limit = (mlimit *60) + slimit
console.log(mlimit)
}
})


// this function is used to work with the submission
function handleSubmit() {
  const minLimit = document.getElementById("min").value;
  const secLimit = document.getElementById("sec").value;
  if (minLimit || secLimit) {
    document.getElementById("txtTempo").value = (minLimit + secLimit)/60;

  }

}

handleSubmit()

function documentLoaded() {

  "use strict";

  // listen for mouse clicks on the button
  document.getElementById("btnStart").addEventListener("click", botaoClicked, false);

  // console.log("Documento carregado");
}

// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function botaoClicked() {

  "use strict";

  startTime = new Date();

  limite = parseFloat(document.getElementById("txtTempo").value);


  inputN = 

  clearInterval(temporizador);
  temporizador = setInterval(updateTime, 1000);
}

function updateTime() {

  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  // convert seconds to minutes and seconds (below 60)
  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);
var currentSeconds = (minutos * 60) + segundos

  // pad with zeroes on the left to look better
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  // show the elapsed time
  document.getElementById("min").value = minutos
  document.getElementById("sec").value = segundos
  /* document.getElementById("clock").innerHTML = minutos + ":" + segundos; */
  console.log(limit) 
  // check if we are above the time limit and set the color of the timer accordingly
  if (currentSeconds >= limit) {
    document.getElementById("clock").className = "red";
  } else {
    document.getElementById("clock").className = "blue";
  }
}