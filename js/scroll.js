export default function initScroll() {
    const header = document.querySelector('[data-animation="header"]');
    
    function activateScroll() {
        header.classList.add('activateHeader');
    }
    window.addEventListener('scroll', activateScroll);
}
initScroll();