function initCarousel({
    containerSelector,
    trackSelector,
    slideSelector,
    dotsSelector,
    interval = 5000
}) {
    const container = document.querySelector(containerSelector);
    const track = container.querySelector(trackSelector);
    const slides = container.querySelectorAll(slideSelector);
    const dotsContainer = container.querySelector(dotsSelector);

    let index = 0;

    // create dots
    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);

        dot.addEventListener("click", () => {
            index = i;
            update();
        });
    });

    const dots = dotsContainer.querySelectorAll("span");

    function update() {
        track.style.transform = `translateX(-${index * 100}vw)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    setInterval(() => {
        index = (index + 1) % slides.length;
        update();
    }, interval);
}
// Hero image carousel
initCarousel({
    containerSelector: ".carousel",
    trackSelector: ".carousel-track",
    slideSelector: ".carousel-track img",
    dotsSelector: ".carousel-dots",
    interval: 5000
});

// Grouped (5-items) carousel
initCarousel({
    containerSelector: ".carousel-2",
    trackSelector: ".carousel-track-2",
    slideSelector: ".carousel-track-2 .group",
    dotsSelector: ".carousel-dots-2",
    interval: 5000
});

initCarousel({
    containerSelector: ".carousel-3",
    trackSelector: ".carousel-track-3",
    slideSelector: ".carousel-track-3 .group",
    dotsSelector: ".carousel-dots-3",
    interval: 5000
});
initCarousel({
    containerSelector: ".carousel-4",
    trackSelector: ".carousel-track-4",
    slideSelector: ".carousel-track-4 .group",
    dotsSelector: ".carousel-dots-4",
    interval: 5000
});
initCarousel({
    containerSelector: ".carousel-5",
    trackSelector: ".carousel-track-5",
    slideSelector: ".carousel-track-5 .group",
    dotsSelector: ".carousel-dots-5",
    interval: 5000
});