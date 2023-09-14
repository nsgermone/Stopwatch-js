// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const timer = document.getElementById('timer');
// const hr = document.getElementById('hr');
// const min = document.getElementById('min');
// const sec = document.getElementById('sec');
// const count = document.getElementById('count');

let hr = 00;
let min = 00;
let sec = 00;
let count = 00;

function startTimer() {
  alert('start');
  // while (true) {
  //   if (sec < 60) {
  //     sec++;
  //   } else if (sec == 60) {
  //     sec = 0;
  //     min++;
  //   } else if (min == 60) {
  //     min = 0;
  //     hr++;
  //   }
  //   timer.innerHTML = `${hr}:${min}:${sec}`;
  // }
  // time++;
  // btnStart.classList.add('d-none');
  // btnStop.classList.remove('d-none');
  // btnReset.classList.remove('d-none');
  // timer.classList.remove('text-muted');
  // timer.classList.add('text-dark');
  // timer = hour;
}

function stopTimer() {
  btnStart.classList.remove('d-none');
  btnStop.classList.add('d-none');
  btnReset.classList.remove('d-none');
  timer.classList.add('text-muted');
  timer.classList.remove('text-dark');
}

function resetTimer() {
  btnStart.classList.remove('d-none');
  btnStop.classList.add('d-none');
  btnReset.classList.add('d-none');
  timer.classList.add('text-muted');
  timer.classList.remove('text-dark');
  timer.innerHTML = '00.00.00';
}

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);
