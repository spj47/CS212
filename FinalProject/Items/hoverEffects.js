// This function adds hover effects to product items
function addHoverEffects() {
    const productItems = document.querySelectorAll('.product');

    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseleave', function() {
            item.classList.remove('hovered');
        });
    });
}

// Call the initializePage function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    addHoverEffects();
});
