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
        navItem[0].firstElementChild.classList.add(classItem);


        // Function to activate click event
        function activeTab(index) {
            // Loop through content and items to remove the classes
            navContent.forEach((item) => {
                item.classList.remove(classContent);
            });

            navItem.forEach((item) => {
                item.firstElementChild.classList.remove(classItem);
            });

            // Adding classes to the item and content that was clicked
            navContent[index].classList.add(classContent);
            navItem[index].firstElementChild.classList.add(classItem);

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