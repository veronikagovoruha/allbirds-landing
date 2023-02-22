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

$(function(){
    $('.slider__list-collections').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
    
        prevArrow: ('.collections__btn-right'),
        nextArrow: ('.collections__btn-left'),
        responsive: [
          {
            breakpoint: 1336,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots:true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots:true,
            }
          },
          {
            breakpoint: 688,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.slider__list-arrivals').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow: ('.arrivals__btn-right'),
        nextArrow: ('.arrivals__btn-left'),
        responsive: [
          {
            breakpoint: 1336,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots:true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 688,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.slider__list-stories').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow: ('.stories__btn-right'),
        nextArrow: ('.stories__btn-left'),
        responsive: [
          {
            breakpoint: 1336,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots:true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 688,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
})
