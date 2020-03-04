export default function initScroll() {
    const header = document.querySelector('[data-animation="header"]');
    const classActivateHeader = 'activateHeader';

    function activateScroll() {
        window.pageYOffset > 0
            ? header.classList.add(classActivateHeader)
            : header.classList.remove(classActivateHeader);
    }
    window.onscroll = activateScroll;
}