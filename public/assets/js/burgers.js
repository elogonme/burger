// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // Helper functon to display error message for 3 sec on page instead of alert;
    const alertError = () => {
      const errEl = document.getElementById('error');
      errEl.style.display = 'block';
      setTimeout(() => errEl.style.display = 'none', 3000);
    };

    // CREATE
    const createCatBtn = document.getElementById('create-form');
  
    if (createCatBtn) {
      createCatBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name "burger"
        const newBurger = {
          name: document.getElementById('burger').value.trim(),
        };
  
        // Send POST request to create a new burger
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
  
          // Reload the page so the user can see the new burger
          console.log('Sent request to add a new Burger!', newBurger);
          location.reload();
        });
      });
    }

    // UPDATE
  const devourBtns = document.querySelectorAll('.devour-btn');

  // Set up the event listener for the Devour button
  if (devourBtns) {
    devourBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        const newDevourState = {
          devoured: true,
        };

        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newDevourState),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed devoured state to: ${true}`);
            location.reload('/');
          } else {
            alertError();
          }
        });
      });
    });
  };

    // Delete
    const deleteBtns = document.querySelectorAll('.delete-btn');

    // Set up the event listener for the delete button
    if (deleteBtns) {
      deleteBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
  
          fetch(`/api/burgers/${id}`, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`deleted burger with id: ${id}`);
              location.reload('/');
            } else {
              alertError();
            }
          });
        });
      });
    };
  
});
  