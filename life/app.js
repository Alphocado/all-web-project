// <i class="fa-regular fa-check"></i>
let checkTags = document.querySelectorAll(".check");
let addI = document.createElement('i');
let checkparr = document.querySelectorAll(".checkParr");
addI.className = 'fa-solid fa-check'

let time = document.getElementById('time');
let money = document.getElementById('money');
let energy = document.getElementById('energy');

for(let i=0; i<checkparr.length; i++){
  checkparr[i].addEventListener('click', function(){
    addI.style.fontSize = "1px";
    addI.style.opacity = "0";

    if(!checkTags[i].contains(addI)){
      checkTags[i].appendChild(addI);
      void addI.offsetWidth;
      addI.style.fontSize = "20px";
      addI.style.opacity = "1";
      animateProgressBar(i);
    } else {
      checkTags[i].appendChild(addI);
    }
  });
}
function animateProgressBar(index) {
  let currentTimeWidth = parseFloat(time.style.width) || 0;
  let currentMoneyWidth = parseFloat(money.style.width) || 0;
  let currentEnergyWidth = parseFloat(energy.style.width) || 0;

  let widths = [0, 0, 0];

  if (index === 0) {
    widths = [97, 10, 99];
  } else if (index === 1) {
    widths = [10, 95, 95];
  } else if (index === 2) {
    widths = [90, 99, 10];
  }

  animateWidth(time, currentTimeWidth, widths[0]);
  animateWidth(money, currentMoneyWidth, widths[1]);
  animateWidth(energy, currentEnergyWidth, widths[2]);
}

function animateWidth(element, currentWidth, targetWidth) {
  let step = 1; 

  function stepFunction() {
    if (currentWidth < targetWidth) {
      currentWidth += step;
      element.style.width = currentWidth + "%";
      requestAnimationFrame(stepFunction);
    } else if (currentWidth > targetWidth) {
      currentWidth -= step;
      element.style.width = currentWidth + "%";
      requestAnimationFrame(stepFunction);
    } else {
      element.style.width = currentWidth + "%";
    }
  }

  requestAnimationFrame(stepFunction);
}
