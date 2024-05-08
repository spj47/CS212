// Define a function to handle product search
function searchProducts() {
    // Get the search query entered by the user
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    
    // Get all product items
    const products = document.querySelectorAll('.product');
    
    // Loop through each product item
    products.forEach(product => {
        // Get the product name
        const productName = product.querySelector('h3').textContent.toLowerCase();
        
        // Check if the product name contains the search query
        if (productName.includes(searchQuery)) {
            // If the product matches the search query, display it
            product.style.display = 'block';
        } else {
            // If the product does not match the search query, hide it
            product.style.display = 'none';
        }
    });
}

// Add event listener for the search input
document.getElementById('search-input').addEventListener('input', searchProducts);
