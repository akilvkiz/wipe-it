// Fetch the JSON data from the data.json file
fetch('data.json')
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
    // Select the container where the data will be displayed
    const container = document.getElementById('data-container');

    // Loop through each product in the data and create HTML for it
    data.forEach(product => {
      // Create a div element for each product
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      // Add the product details
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
      `;

      // Append the product div to the container
      container.appendChild(productDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching the data:', error);
  });
