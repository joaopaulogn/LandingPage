export default function InitTooltip() {
    // Constants for DOM manipulation
    const tooltip = document.querySelector('[data-animation="tooltip"]');

    if (tooltip && window.innerWidth >= 1000) {
        // Function to dynamically create the tooltip by hovering over the input
        function createTooltip(element) {
            const tooltip = document.createElement('div');
            const classTooltip = 'tooltip';
            const text = element.getAttribute('aria-label');
            tooltip.classList.add(classTooltip);
            tooltip.innerText = text;
            document.body.appendChild(tooltip);

            return tooltip; // return the HTMLDivElement
        }

        // Function to activate mouseover event
        function onMouseOver() {
            const tooltip = createTooltip(this);

            // Adding an event for when to move the mouse, add the top and left properties based on where the mouse is
            this.addEventListener('mousemove', onMouseMove);
            onMouseMove.tooltip = tooltip;

            // Adding an event for when to remove the mouse from the input, remove the tooltip, the onMouseMove event and your own event
            this.addEventListener('mouseleave', onMouseLeave);
            onMouseLeave.element = this;
            onMouseLeave.tooltip = tooltip;
        };

        // Function to activate mousemove event
        const onMouseMove = {
            handleEvent() {
                // Defining the top and left properties of the tooltip
                this.tooltip.style.top = event.pageY + 10 + 'px';
                this.tooltip.style.left = event.pageX + 10 + 'px';
            }
        }

        // Function to activate mouseleave event
        const onMouseLeave = {
            handleEvent() {
                // Removing the tooltip, its own event and onMouseMove
                this.tooltip.remove();
                this.element.removeEventListener('mouseleave', onMouseLeave);
                this.element.removeEventListener('mousemove', onMouseMove);
            }
        };

        // Event
        tooltip.addEventListener('mouseover', onMouseOver);
    }
}
