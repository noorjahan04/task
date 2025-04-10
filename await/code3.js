// Define an asynchronous function to fetch product data
async function fetchProducts() {
    try {
        // Send a GET request to the API endpoint to fetch product data
        let response = await fetch('https://fakestoreapi.com/products');
      // Convert the response data into a JSON format
        let products = await response.json();
        // Loop through each product and display relevant details
        products.forEach(product => {
            console.log('Title:', product.title); // Display the product title
            console.log('Price:', product.price); // Display the product price
            console.log('Image:', product.image); // Display the product image URL
            console.log('------------------------'); // Add a separator for clarity
        });
        // Calculate the total price of all products
        let total = products.reduce((sum, product) => sum + product.price, 0);
        // Display the total price of all products with two decimal places
        console.log('Total Price of All Products: $' + total.toFixed(2));
    } catch (error) {
        // Handle any errors that may occur during the fetch process
        console.log('Failed to fetch products. Please try again later.');
    }
}
// Call the function to execute the product fetching process
fetchProducts();