export default function initValidationForm() {
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
        const classTextAlert = 'invalidTextAlert';
        const classIconAlert = 'invalidIconAlert';

        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        // Validation if the input has the necessary requirements
        if (!validateEmail(inputForm.value)) {
            // if not, add
            inputForm.classList.add(classActiveInput);
            textAlertForm.classList.add(classTextAlert);
            iconAlertForm.classList.add(classIconAlert);
            textAlertForm.innerText = "Whoops, make sure it's an email";

        } else {
            // if yes, remove
            inputForm.classList.remove(classActiveInput);
            textAlertForm.classList.remove(classTextAlert);
            iconAlertForm.classList.remove(classIconAlert);
        }
    }

    // Event
    btnForm.addEventListener('click', (e) => {
        activeFormValidation(e);
    });
}
initValidationForm();