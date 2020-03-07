// Importing constants
import * as cons from './constants.js';

export default function initTabLinks() {
    // Constants for DOM Manipulation
    const internalLinks = document.querySelectorAll('[data-animation="internal-links"]');

    // Checking if links exists
    if (internalLinks) {
        // Function to activate event
        function activeTabLinks(event) {
            const classMenuLink = 'mobile-link';
            // To prevent default behavior
            event.preventDefault();

            // Constants to manipulate function
            const current = event.currentTarget;
            const hrefLink = current.getAttribute('href');
            const targetSection = document.querySelector(hrefLink);
            const topSection = targetSection.offsetTop;

            if (current.classList.contains(classMenuLink)) {
                cons.menuMobile.classList.remove(cons.classMenuMobile);
                cons.header.classList.remove(cons.classHeader);
                document.documentElement.removeAttribute('class');
            }

            window.scrollTo({
                top: (topSection - (cons.header.offsetHeight)),
                behavior: 'smooth',
            })
        };

        // Event
        internalLinks.forEach((item) => {
            item.addEventListener('click', activeTabLinks);
        });
    }
}