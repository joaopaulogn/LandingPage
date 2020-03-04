export default function initTabLinks() {
    // Constants for DOM Manipulation
    const internalLinks = document.querySelectorAll('[data-animation="internal-links"]');
    const header = document.querySelector('[data-animation="header"]');

    // Checking if links exists
    if (internalLinks) {
        // Function to activate event
        function activeTabLinks(e) {
            const classMenuLink = 'mobile-link' ;
            // To prevent default behavior
            e.preventDefault();

            // Constants to manipulate function
            const current = e.currentTarget;
            const hrefLink = current.getAttribute('href');
            const targetSection = document.querySelector(hrefLink);
            const topSection = targetSection.offsetTop;

            if (current.classList.contains(classMenuLink)) {
                const menuMobile = document.querySelector('[data-animation="menu-mobile"]');
                const classDisableHeader = 'disableHeader';
                const classActivateMenu = 'activateMenuMobile';

                menuMobile.classList.remove(classActivateMenu);
                header.classList.remove(classDisableHeader);
                document.documentElement.removeAttribute('class');
            }

            window.scrollTo({
                top: (topSection - (header.offsetHeight)),
                behavior: 'smooth',
            })
        };

        // Event
        internalLinks.forEach((item) => {
            item.addEventListener('click', (e) => {
                activeTabLinks(e);
            });
        });
    }
}