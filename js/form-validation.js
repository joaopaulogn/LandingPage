export default function initValidationForm() {
    // Constants for DOM Manipulation
    const btnForm = document.querySelector('[data-animation="form-btn"]');
    const inputForm = document.querySelector('[data-animation="form-input"]');

    // Function to activate event
    function activeFormValidation(e) {
        // To prevent default behavior
        e.preventDefault();

        // Constants to manipulate the input alert area
        const iconAlert = inputForm.nextElementSibling;
        const textAlert = inputForm.parentElement.nextElementSibling;

        // Classes to manipulate states
        const classInvalidInput = 'invalidInput';
        const classInvalidAlert = 'invalidTextAlert';
        const classInvalidIcon = 'invalidIconAlert';
        const classValidInput = 'validInput';
        const classValidAlert = 'validTextAlert';
        const classValidIcon = 'validIconAlert';

        // Function to add classes for valid states
        function validStates() {
            inputForm.classList.add(classValidInput);
            textAlert.classList.add(classValidAlert);
            textAlert.innerText = "Thank you for getting in touch";
            iconAlert.classList.add(classValidIcon, 'fa-check-circle');
        }

        // Function to add classes for invalid states
        function invalidStates() {
            inputForm.classList.add(classInvalidInput);
            textAlert.classList.add(classInvalidAlert);
            textAlert.innerText = "Whoops, make sure it's an email";
            iconAlert.classList.add(classInvalidIcon, 'fa-exclamation-circle');
        }

        // Function to check if the email entered is valid
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        textAlert.style.animation = 'slideInRight 0.3s ease-in-out';

        // Validation if the input has the necessary requirements
        if (validateEmail(inputForm.value)) {
            // if yes
            inputForm.classList.remove(classInvalidInput);
            textAlert.classList.remove(classInvalidAlert);
            iconAlert.classList.remove(classInvalidIcon, 'fa-exclamation-circle');
            validStates();

        } else {
            // if no
            inputForm.classList.remove(classValidInput);
            textAlert.classList.remove(classValidAlert);
            iconAlert.classList.remove(classValidIcon, 'fa-check-circle');
            invalidStates();
        }
    }

    // Event
    btnForm.addEventListener('click', (e) => {
        activeFormValidation(e);
    });
}
initValidationForm();