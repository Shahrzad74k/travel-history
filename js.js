
var swiper = new Swiper(".mySwiper", {
    slidesPerView:3.5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
    },
    breakpoints:{
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



const myUniqueSwiper = new Swiper(".uniqueSlider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
},


});


document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const nextButton = document.querySelector(".carousel-next");
    const prevButton = document.querySelector(".carousel-prev");
    const indicators = document.querySelector(".carousel-indicators");

    let currentIndex = 0;

    // Create pagination indicators
    items.forEach((_, index) => {
        const indicator = document.createElement("div");
        if (index === 0) indicator.classList.add("active");
        indicators.appendChild(indicator);
    });

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll(".carousel-indicators div").forEach((el, index) => {
            el.classList.toggle("active", index === currentIndex);
        });
    };

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    document.querySelectorAll(".carousel-indicators div").forEach((el, index) => {
        el.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}