var singleSlide = document.querySelectorAll('.single-slide');
var slideBtn  = document.querySelectorAll('.slide-btn');
let currentSlide = 1;


// code para navegacao manual dos slides

var manualNav = function(manual){

    singleSlide.forEach((slides) => {
        slides.classList.remove('activeJS');

        slideBtn.forEach((btn) => {
            btn.classList.remove('activeJS');
    });
});

singleSlide[manual].classList.add('activeJS');
    slideBtn[manual].classList.add('activeJS');
}

slideBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});