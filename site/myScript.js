let sliderImages = document.querySelectorAll('.slide'),
    sliderSomething = document.querySelector('#sliderimage'),
    current = 0;

// Clear Images for Slider
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

// Slider Initiator
function startSlider() {
    reset();
    sliderImages[0].style.display = 'block';
}

// Next Slide
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// Next Slide When Clicked on the Image
sliderSomething.addEventListener('click', function(){
    if(current === sliderImages.length - 1 ) {
        current = - 1;
    }
    slideRight();
});

startSlider();