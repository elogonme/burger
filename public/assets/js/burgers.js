// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // CREATE
    const createCatBtn = document.getElementById('create-form');
  
    if (createCatBtn) {
      createCatBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "burger"
        const newBurger = {
          name: document.getElementById('burger').value.trim(),
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('burger').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Sent request to add a new Burger!', newBurger);
          location.reload();
        });
      });
    }
  
});
  