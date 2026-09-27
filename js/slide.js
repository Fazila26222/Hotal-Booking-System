document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentSlide = 0;
    let sildeInterval;

    function goTo(index) {
        slides.forEach((slide) => slide.classList.remove("is-active"));
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;

        } else {
            currentSlide = index;
        }

        slides[currentSlide].classList.add("is-active");
    }
    // buttons

    prevBtn.addEventListener("click", () => {
        goTo(currentSlide - 1);
        resetTimer();
    });

    nextBtn.addEventListener("click", () => {
        goTo(currentSlide + 1);
        resetTimer();
    });

    function startTimer() {
        sildeInterval = setInterval(() => {
            goTo(currentSlide + 1);
        }, 5000);
    }

    function resetTimer() {
        clearInterval(sildeInterval);
        startTimer();
    }

    startTimer();
});