const toggle = document.getElementById('searchToggle');
const bar = document.getElementById('searchBar');

toggle.addEventListener('click', function (e) {
    e.preventDefault();
    bar.style.display = bar.style.display === 'block' ? 'none' : 'block';
});

// HERO CAROUSEL
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.getElementById('heroNext')?.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 5000);
});

document.getElementById('heroPrev')?.addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    slideInterval = setInterval(nextSlide, 5000);
});

// RENDELÉS ŰRLAP
const orderForm = document.getElementById('orderForm');

orderForm?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    if (!name || !phone || !email || !service || !date) {
        alert('Kérem, töltse ki mindegyik mezőt!');
        return;
    }

    alert('Rendelését felvettük, hamarosan jelentkezünk!');

    orderForm.reset();
});
