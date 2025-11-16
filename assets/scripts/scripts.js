const burgerMenu = document.getElementById('burgerMenu')
const openIcon = document.getElementById('openIcon')
const closeIcon = document.getElementById('closeIcon')
const headerNav = document.getElementById('headerNav')

burgerMenu.addEventListener('click', () => {
    openIcon.classList.toggle('d-none')
    closeIcon.classList.toggle('d-none')
    headerNav.classList.toggle('header-nav__open')
})

function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

document.getElementById('modalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма надіслана!');
    closeModal();
});

const swiperContainer = document.querySelector('.mySwiper');

if (swiperContainer) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const teamMembers = [
        {
            imgSrc: "assets/images/about_us/team-avatar1.webp",
            name: "Андрій Козак",
            role: "Менеджер спільноти"
        },
        {
            imgSrc: "assets/images/about_us/team-avatar2.webp",
            name: "Марія Бондаренко",
            role: "Керівник групи тестування"
        },
        {
            imgSrc: "assets/images/about_us/team-avatar3.webp",
            name: "Роман Сидоренко",
            role: "Старший розробник"
        },
        {
            imgSrc: "assets/images/about_us/team-avatar4.webp",
            name: "Юлія Мороз",
            role: "Лід тестувальник AR/VR-ігор"
        },
    ];

    const teamGrid = document.getElementById('team-grid-container');

    if (teamGrid) {

        const cardsHTML = teamMembers.map(member => {
            return `
                <div class="about-team-card">
                    <img src="${member.imgSrc}" alt="${member.name}" class="about-team-avatar">
                    <p class="about-team-name">${member.name}</p>
                    <p class="about-team-role">${member.role}</p>
                </div>
            `;
        }).join('');

        teamGrid.innerHTML = cardsHTML;
    }

});

document.addEventListener('DOMContentLoaded', () => {

    function animateCounter(elementId, goal, duration) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const start = 0;
        const end = parseInt(goal, 10);
        const range = end - start;
        const incrementTime = 20;
        const steps = Math.ceil(duration / incrementTime);
        const incrementValue = range / steps;
        
        let current = start;

        const timer = setInterval(() => {
            current += incrementValue;

            if (current >= end) {
                element.textContent = end + "+";
                clearInterval(timer);
            } else {
                element.textContent = Math.ceil(current) + "+";
            }
        }, incrementTime);
    }

    const statsSection = document.getElementById('stats-counter-section');
    
    if (statsSection) {
        let hasAnimated = false;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;

                animateCounter('counter-clients', 90, 2500);
                animateCounter('counter-countries', 30, 2500);
                animateCounter('counter-projects', 50, 2500);

                observer.unobserve(statsSection);
            }
        }, {
            threshold: 0.5
        });

        observer.observe(statsSection);
    }

});


