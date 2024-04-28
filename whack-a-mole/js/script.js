const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let tanahSebelumnya; 
let selesai;
let skor;
let canHit = true;

function randomTanah(tanah) 
{
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if(tRandom == tanahSebelumnya){
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max)
{
  return Math.round(Math.random() * (max - min) + min);
}

function showTikus()
{
  // console.log(tanah);
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 1000);

  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if(!selesai) {
      showTikus();
    }
  }, wRandom);

  setTimeout(() => {
    canHit = true;
  }, wRandom);
}

function mulai()
{
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  showTikus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul()
{
  if(!canHit){
    return;
  }
  skor++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanSkor.textContent = parseInt(skor);

  canHit = false;
}

tikus.forEach(t => {
  t.addEventListener('click', pukul);
});