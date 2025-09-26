document.addEventListener('DOMContentLoaded', () => {
    // --- Product button functionality ---
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('This is a demo! This item was not actually added to your cart.');
        });
    });

    // --- Hamburger menu functionality ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle nav
        navLinks.classList.toggle('nav-active');

        // Animate links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // --- Close nav on link click ---
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            // Reset animation
            links.forEach(link => {
                link.style.animation = '';
            });
        });
    });

    // --- Icon functionality ---
    const iconLinks = document.querySelectorAll('.icon-link');
    iconLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This is a demo! This feature is not yet implemented.');
        });
    });
});