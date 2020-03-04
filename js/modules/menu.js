// Menu mobile
export default function initMenuMobile() {
    // Constants for DOM Manipulation
    const iconMobile = document.querySelector('[data-animation="icon-mobile"]');
    const menuMobile = document.querySelector('[data-animation="menu-mobile"]');
    const btnClose = document.querySelector('[data-animation="btn-close"]');
    const header = document.querySelector('[data-animation="header"]');

    // Classes to activate or desactivate events
    const classDisableHeader = 'disableHeader';
    const classActivateMenu = 'activateMenuMobile';
    const classDisableScroll = 'disableScroll';

    // Activate function
    function activateMenuMobile(e) {
        e.preventDefault();

        header.classList.add(classDisableHeader);
        menuMobile.classList.add(classActivateMenu);
        document.documentElement.classList.add(classDisableScroll);
    };

    // Event to activate
    iconMobile.addEventListener('click', (e) => {
        activateMenuMobile(e);
    })

    // Disable function
    function disableMenuMobile() {
        header.classList.remove(classDisableHeader);
        menuMobile.classList.remove(classActivateMenu);
        document.documentElement.removeAttribute('class');
    }

    // Event to disable
    btnClose.addEventListener('click', disableMenuMobile);
}