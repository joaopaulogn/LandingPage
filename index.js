// Scroll animation
const header = document.querySelector('[data-animation="header"]');
const heightHeader = header.offsetHeight;

function activateScroll() {
    header.classList.add('activateHeader');
}

window.addEventListener('scroll', activateScroll);

// Tab Navigation
function initNavTab() {
    // Constants for DOM manipulation
    const navItem = document.querySelectorAll('[data-animation="nav-item"]');
    const navContent = document.querySelectorAll('[data-animation="nav-content"]');
    const navTitle = document.querySelectorAll('[data-animation="nav-title"]');

    // Checking if navContent, navItem and navTitle exist
    if (navContent && navItem && navTitle) {
        // Classes to activate or desactivate events
        const classContent = 'activeTabContent';
        const classItem = 'activeTabItem';

        // Adding classes for first item and content
        navContent[0].classList.add(classContent);
        navTitle[0].classList.add(classItem);

        // Function to activate click event
        function activeTab(index) {
            // Loop through content and items to remove the classes
            navContent.forEach((item) => {
                item.classList.remove(classContent);
            });

            navTitle.forEach((item) => {
                item.classList.remove(classItem);
            });

            // Adding classes to the item and content that was clicked
            navContent[index].classList.add(classContent);
            navTitle[index].classList.add(classItem);
        }

        // Event
        navItem.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}
initNavTab();

// Accordion List
function initAccordionList() {
    // Constants for DOM manipulation
    const accordionTerm = document.querySelectorAll('[data-animation="accordionTerm"]');
    const accordionState = document.querySelectorAll('[data-animation="svg-arrow"]');

    // Checking if accordionTerm and accordionState exist
    if (accordionTerm && accordionState) {
        // Classes to activate or desactivate events
        const classAccordionAnswer = 'activeAccordionAnswer';
        const classAccordionTerm = 'activeAccordionTerm';
        const classAccordionState = 'activeAccordionState'

        // Adding classes for the first items on load page
        accordionTerm[0].classList.add(classAccordionTerm);
        accordionTerm[0].nextElementSibling.classList.add(classAccordionAnswer);
        accordionState[0].classList.add(classAccordionState);

        // Function to activate click event
        function activeAccordionList(e, index) {
            // Current and next element
            const current = e.currentTarget;
            const next = current.nextElementSibling;

            // Adding classes to the items that were clicked
            accordionState[index].classList.toggle(classAccordionState);
            current.classList.toggle(classAccordionTerm);
            next.classList.toggle(classAccordionAnswer);

        }

        // Event
        accordionTerm.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                activeAccordionList(e, index);
            });
        });
    }
}
initAccordionList();

function initTabLinks() {
    // Constants for DOM Manipulation
    const internalLinks = document.querySelectorAll('[data-animation="internal-links"]');

    // Checking if links exists
    if (internalLinks) {
        // Function to activate event
        function activeTabLinks(e) {
            // To prevent default behavior
            e.preventDefault();

            // Constants to manipulate function
            const current = e.currentTarget;
            const hrefLink = current.getAttribute('href');
            const targetSection = document.querySelector(hrefLink);
            const topSection = targetSection.offsetTop;

            if (current.classList.contains('header__link')) {
                const menuMobile = document.querySelector('[data-animation="menu-mobile"]');
                const header = document.querySelector('[data-animation="header"]');

                menuMobile.classList.remove('activateMenuMobile');
                header.classList.remove('disableHeader');
            }

            window.scrollTo({
                top: (topSection - heightHeader),
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
initTabLinks();

function initValidationForm() {
    // Constants for DOM Manipulation
    const btnForm = document.querySelector('[data-animation="form-btn"]');
    const inputForm = document.querySelector('[data-animation="form-input"]');
    const textAlertForm = document.querySelector('[data-animation="form-alert-text"]');
    const iconAlertForm = document.querySelector('[data-animation="form-alert-icon"]');

    // Function to activate event
    function activeFormValidation(e) {
        // To prevent default behavior
        e.preventDefault();

        // Classes to activate or desactivate events
        const classActiveInput = 'activeInput';
        const classTextAlert = 'activeTextAlert';
        const classIconAlert = 'activeIconAlert';

        // Validation if the input has the necessary requirements
        if (inputForm.value.includes('@') && (inputForm.value.endsWith('.com') || inputForm.value.endsWith('.com.br'))) {
            // if yes, remove
            inputForm.classList.remove(classActiveInput);
            textAlertForm.classList.remove(classTextAlert);
            iconAlertForm.classList.remove(classIconAlert);
        } else {
            // if not, add
            inputForm.classList.add(classActiveInput);
            textAlertForm.classList.add(classTextAlert);
            iconAlertForm.classList.add(classIconAlert);
        }
    }

    // Event
    btnForm.addEventListener('click', (e) => {
        activeFormValidation(e);
    });
}
initValidationForm();

function initMenuMobile() {
    // Constants for DOM Manipulation
    const menuMobile = document.querySelector('[data-animation="menu-mobile"]');
    const iconMobile = document.querySelector('[data-animation="icon-mobile"]');
    const header = document.querySelector('[data-animation="header"]');
    const btnClose = document.querySelector('[data-animation="btn-close"]');

    // Classes to activate or desactivate events
    const classActivateHeader = 'disableHeader';
    const classActivateMenu = 'activateMenuMobile';

    // Activate function
    function activateMenuMobile(e) {
        e.preventDefault();

        header.classList.add(classActivateHeader);
        menuMobile.classList.add(classActivateMenu);
    };

    // Event to activate
    iconMobile.addEventListener('click', (e) => {
        activateMenuMobile(e);
    })

    // Disable function
    function disableMenuMobile() {
        header.classList.remove(classActivateHeader);
        menuMobile.classList.remove(classActivateMenu);
    }

    // Event to disable
    btnClose.addEventListener('click', disableMenuMobile);
}
initMenuMobile();