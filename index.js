const everedayBtnEl = document.querySelector('.btn-everyday');
const runningBtnEl = document.querySelector('.btn-running');
const travelBtnEl = document.querySelector('.btn-travel');
const everydayListEl = document.querySelector('.everyday__list');
const runningListEl = document.querySelector('.running__list');
const travelListEl = document.querySelector('.travel__list');

function addClassToEveryday(){
    runningListEl.classList.remove('visually');
    travelListEl.classList.remove('visually');
    everydayListEl.classList.add('visually');
}

function addClassToRunning(){
    everydayListEl.classList.remove('visually');
    travelListEl.classList.remove('visually');
    runningListEl.classList.add('visually');
}

function addClassToRtavel(){
    everydayListEl.classList.remove('visually');
    runningListEl.classList.remove('visually');
    travelListEl.classList.add('visually');
}
everedayBtnEl.addEventListener('click', addClassToEveryday);
runningBtnEl.addEventListener('click', addClassToRunning);
travelBtnEl.addEventListener('click', addClassToRtavel);