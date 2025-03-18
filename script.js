// Function to handle the form submission and log food waste
document.getElementById('food-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const foodName = document.getElementById('food-name').value;
  const quantity = document.getElementById('quantity').value;

  if (foodName && quantity) {
    const logList = document.getElementById('log-list');
    const listItem = document.createElement('li');
    listItem.textContent = `Food Item: ${foodName} - Quantity: ${quantity}kg`;

    logList.appendChild(listItem);

    // Clear the input fields
    document.getElementById('food-name').value = '';
    document.getElementById('quantity').value = '';
  }
});
