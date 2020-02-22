export default function initScroll() {
    const header = document.querySelector('[data-animation="header"]');
    const classActivateHeader = 'activateHeader';

    function activateScroll() {
        header.classList.add(classActivateHeader);
    }
    window.addEventListener('scroll', activateScroll);
}
initScroll();