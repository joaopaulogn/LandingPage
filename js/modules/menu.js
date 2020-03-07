// Importing constants
import * as cons from './constants.js';

// Menu mobile
export default function initMenuMobile() {
    // Constants for DOM Manipulation
    const btnMenuOpen = document.querySelector('[data-animation="btn-menu-open"]');
    const btnMenuClose = document.querySelector('[data-animation="btn-menu-close"]');

    // Classes to activate or desactivate events
    const classScroll = 'disableScroll';

    // Function to activate
    function activeMenuMobile(event) {
        event.preventDefault();

        cons.header.classList.add(cons.classHeader);
        cons.menuMobile.classList.add(cons.classMenuMobile);
        document.documentElement.classList.add(classScroll);
    };

    // Function to disable
    function disableMenuMobile(event) {
        event.preventDefault();

        cons.header.classList.remove(cons.classHeader);
        cons.menuMobile.classList.remove(cons.classMenuMobile);
        document.documentElement.classList.remove(classScroll);
    }

    // Event to activate
    btnMenuOpen.addEventListener('click', activeMenuMobile);
    // Event to disable
    btnMenuClose.addEventListener('click', disableMenuMobile);
}