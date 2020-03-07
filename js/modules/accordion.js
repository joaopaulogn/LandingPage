export default function initAccordionList() {
    // Constants for DOM manipulation
    const accordionTerm = document.querySelectorAll('[data-animation="accordionTerm"]');

    // Checking if accordionTerm and accordionState exist
    if (accordionTerm) {
        // Classes to activate or desactivate events
        const classAnswer = 'activeAnswer';
        const classTerm = 'activeTerm';
        const classState = 'activeState'

        // Adding classes for the first items on load page
        const firstTerm = accordionTerm[0];

        firstTerm.classList.add(classTerm);
        firstTerm.nextElementSibling.classList.add(classAnswer);
        firstTerm.lastElementChild.classList.add(classState);

        // Function to activate click event
        function activeAccordionList(event) {
            // Current element
            const current = event.currentTarget;

            // Adding classes to the items that were clicked
            current.classList.toggle(classTerm);
            current.nextElementSibling.classList.toggle(classAnswer);
            current.lastElementChild.classList.toggle(classState);
        }

        // Event
        accordionTerm.forEach((item) => {
            item.addEventListener('click', activeAccordionList);
        });
    }
}