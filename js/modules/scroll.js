// Importing constants
import * as cons from './constants.js';

// Scroll animation
export default function initScroll() {
    const classHeader = 'activeHeader';

    function activateScroll() {
        window.pageYOffset > 0
            ? cons.header.classList.add(classHeader)
            : cons.header.classList.remove(classHeader);
    }
    window.onscroll = activateScroll;
}