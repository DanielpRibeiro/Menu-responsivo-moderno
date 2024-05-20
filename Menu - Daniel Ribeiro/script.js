const menuButton = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-menu");

let menuOpen = false;

menuButton.addEventListener("click", () => {
    if (!menuOpen) {
        navMenu.classList.add("open");
        menuButton.classList.add("open");
        menuOpen = true;
    } else {
        navMenu.classList.remove("open");
        menuButton.classList.remove("open");
        menuOpen = false;
    }
});

 document.addEventListener('DOMContentLoaded', () => {
            const currentUrl = window.location.href;
            const menuItems = document.querySelectorAll('.nav-item .nav-link');

            menuItems.forEach(item => {
                if (currentUrl === item.href) {
                    item.classList.add('active');
                }
            });
        });
