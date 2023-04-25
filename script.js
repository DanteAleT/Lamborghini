const btnRoof = document.getElementById('Roof');
const roofOpacity = document.getElementById('RoofOpacity');

const btnWindshield = document.getElementById('Windshield');
const winOpacity = document.getElementById('WinOpacity')

const btnRaerlight = document.getElementById('Raerlight');
const raerOpacity = document.getElementById('RaerOpacity')

const btnHeadlight = document.getElementById('Headlight');
const headOpacity = document.getElementById('HeadOpacity')

const btnWheel = document.getElementById('Wheel');
const wheelOpacity = document.getElementById('WheelOpacity')

const btnBumper = document.getElementById('Bumper');
const bumperOpacity = document.getElementById('BumperOpacity')

btnRoof.addEventListener('click', ()=>{
    roofOpacity.classList.toggle('clase1');
});
btnWindshield.addEventListener('click', ()=>{
  winOpacity.classList.toggle('clase1');
});
btnRaerlight.addEventListener('click', ()=>{
  raerOpacity.classList.toggle('clase1');
});
btnHeadlight.addEventListener('click', ()=>{
  headOpacity.classList.toggle('clase1');
});
btnWheel.addEventListener('click', ()=>{
  wheelOpacity.classList.toggle('clase1');
});
btnBumper.addEventListener('click', ()=>{
  bumperOpacity.classList.toggle('clase1');
});