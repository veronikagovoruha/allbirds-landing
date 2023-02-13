const everedayBtnEl = document.querySelector('.btn-everyday');
const runningBtnEl = document.querySelector('.btn-running');
const travelBtnEl = document.querySelector('.btn-travel');
const everydayListEl = document.querySelector('.everyday__list');
const runningListEl = document.querySelector('.running__list');
const travelListEl = document.querySelector('.travel__list');

function addClassToEveryday(){
    runningListEl.classList.remove('visually');
    travelListEl.classList.remove('visually');

    runningBtnEl.classList.remove('btn__visually');
    travelBtnEl.classList.remove('btn__visually');

    everydayListEl.classList.add('visually');
    everedayBtnEl.classList.add('btn__visually');
}

function addClassToRunning(){
    everydayListEl.classList.remove('visually');
    travelListEl.classList.remove('visually');

    everedayBtnEl.classList.remove('btn__visually');
    travelBtnEl.classList.remove('btn__visually');

    runningListEl.classList.add('visually');
    runningBtnEl.classList.add('btn__visually');
}

function addClassToRtavel(){
    everydayListEl.classList.remove('visually');
    runningListEl.classList.remove('visually');

    everedayBtnEl.classList.remove('btn__visually');
    runningBtnEl.classList.remove('btn__visually');

    travelListEl.classList.add('visually');
    travelBtnEl.classList.add('btn__visually');
}
everedayBtnEl.addEventListener('click', addClassToEveryday);
runningBtnEl.addEventListener('click', addClassToRunning);
travelBtnEl.addEventListener('click', addClassToRtavel);