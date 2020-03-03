export default function initAccordionList() {
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
        const firstTerm = accordionTerm[0];
        const firstState = accordionState[0];

        firstTerm.classList.add(classAccordionTerm);
        firstTerm.nextElementSibling.classList.add(classAccordionAnswer);
        firstState.classList.add(classAccordionState);

        // Function to activate click event
        function activeAccordionList(e, index) {
            // Current element
            const current = e.currentTarget;

            // Adding classes to the items that were clicked
            accordionState[index].classList.toggle(classAccordionState);
            current.classList.toggle(classAccordionTerm);
            current.nextElementSibling.classList.toggle(classAccordionAnswer);
        }

        // Event
        accordionTerm.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                activeAccordionList(e, index);
            });
        });
    }
}