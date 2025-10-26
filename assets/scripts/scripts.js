const burgerMenu = document.getElementById('burgerMenu')
const openIcon = document.getElementById('openIcon')
const closeIcon = document.getElementById('closeIcon')
const headerNav = document.getElementById('headerNav')

burgerMenu.addEventListener('click', () => {
    openIcon.classList.toggle('d-none')
    closeIcon.classList.toggle('d-none')
    headerNav.classList.toggle('header-nav__open')
})

// Відкриття модального вікна
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Закриття модального вікна
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Закриття при кліку поза модальним вікном (miss click)
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Обробка відправлення форми
document.getElementById('modalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма надіслана!');
    closeModal();
});

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}