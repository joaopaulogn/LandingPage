export default function initNavTab() {
    // Constants for DOM manipulation
    const navItem = document.querySelectorAll('[data-animation="nav-item"]');
    const navContent = document.querySelectorAll('[data-animation="nav-content"]');

    // Checking if navContent and navItem exist
    if (navContent && navItem) {
        // Constants for manipulation
        const classContent = 'activeTabContent';
        const classItem = 'activeTabItem';

        // Adding classes for first item and content
        navContent[0].classList.add(classContent);

        // Condition if viewport width is less than or equal to 600px
        window.innerWidth <= 600
            ? navItem[0].firstElementChild.classList.add(classItem)
            : navItem[0].classList.add(classItem);

        // Function to activate click event
        function activeTab(index) {
            // Loop through content and items to remove the classes
            navContent.forEach((content) => {
                content.classList.remove(classContent);
            });

            navItem.forEach((item) => {
                item.classList.remove(classItem);
                item.firstElementChild.classList.remove(classItem);
            });

            // Adding classes to the item and content that was clicked
            navContent[index].classList.add(classContent);

            // Condition if viewport width is less than or equal to 600px
            window.innerWidth <= 600
                ? navItem[index].firstElementChild.classList.add(classItem)
                : navItem[index].classList.add(classItem);
        }

        // Event
        navItem.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}