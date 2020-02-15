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

    if (internalLinks) {
        // Function to activate event
        function activeTabLinks(e) {
            // To prevent default behavior
            e.preventDefault();

            // Constants to manipulate function
            const current = e.currentTarget;
            const hrefLink = current.getAttribute('href');
            const targetSection = document.querySelector(hrefLink);

            targetSection.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            });
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