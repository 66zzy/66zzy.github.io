const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slideWidth = carouselItems[0].clientWidth;
if (currentIndex > 0) {prevBtn.style.display = 'block';
}else {prevBtn.style.display = 'none';}
if (currentIndex < carouselItems.length-1) {nextBtn.style.display = 'block';
}else {nextBtn.style.display = 'none';}
function goToSlide(index) {
    carousel.style.transition = 'transform 1s ease'; 
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
    if (currentIndex > 0) {prevBtn.style.display = 'block';
    }else {prevBtn.style.display = 'none';}
    if (currentIndex < carouselItems.length-1) {nextBtn.style.display = 'block';
    }else {nextBtn.style.display = 'none';}
    switchCarouselItem(currentIndex);
}
function switchCarouselItem(newIndex) {
    carouselItems.forEach(function(item, index) {
        if (index === newIndex) {
            item.classList.remove('carousel-item');
            void item.offsetWidth; // 强制浏览器重新计算样式和布局
            item.classList.add('carousel-item');
        }
    });
}
function nextSlide() {
    console.log(currentIndex);
    goToSlide(currentIndex + 1);
}
function prevSlide() {
    console.log(currentIndex);
    goToSlide(currentIndex - 1);
}
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

let startX = 0;
let isDragging = false;
let shiftX = 0;

carousel.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX;
    shiftX = 0;
});

document.addEventListener('mousemove', (e) => { 
    if (isDragging) {
    const currentX = e.clientX;
    shiftX = currentX - startX;
    carousel.style.transition = 'transform 0s';
    carousel.style.transform = `translateX(-${currentIndex * slideWidth - shiftX}px)`;
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
    isDragging = false;
    const movedIndex = Math.round(shiftX / slideWidth);
    if (movedIndex < 0) {
        console.log('next');
    nextSlide();
    } else if (movedIndex > 0) {
        console.log('prev');
    prevSlide();
    } else {
    goToSlide(currentIndex);
    };
}
});