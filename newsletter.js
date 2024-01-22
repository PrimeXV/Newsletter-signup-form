//getting elements by their id into a new name 
const emailEL = document.getElementById("email");
const errorValidEL = document.getElementById('error-valid');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const btnEL = document.getElementById("btn");
const signupContainerEL = document.getElementById("container");
const successMessageEL = document.getElementById("success-message");
const successEmailEL = document.getElementById("success-email");
const dismissBtnEL = document.getElementById("mobile-btn");


//event listener for button & input to add email when clicked/enter key is pressed
btnEL.addEventListener('click', (e) => {
  //prevent page from reloading
  e.preventDefault();
  addUser();
});

emailEL.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    // prevent page from reloading
    e.preventDefault();
    // addUser function
    addUser();
  }
});



//event listener for dismiss button to return to the signup form when clicked & when enter key is pressed
dismissBtnEL.addEventListener('click', (e) => {
  // prevent page from reloading
  e.preventDefault();
  // hide the success message and show the signup container to return to initial stage
  successMessageEL.classList.add('hide');
  signupContainerEL.classList.remove('hide');

  //clear input
  emailEL.value = '';
});


dismissBtnEL.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    // prevent page from reloading
  e.preventDefault();
  // hide the success message and show the signup container to return to initial stage
  successMessageEL.classList.add('hide');
  signupContainerEL.classList.remove('hide');

  //clear input
  emailEL.value = '';
  }
 
});




//addUser function to submit email, return error if there is and process to submit page if it is successful

function addUser() {
  // Get the email value
  const email = emailEL.value;

  // Check if the email field is empty or if the email address is formatted correctly 
  if (!email || !emailRegex.test(email)) {
   
    
      // Show the error message
     errorValidEL.style.display = 'block';


     // Change the styles of the input field
    emailEL.style.border = '2px solid hsl(4, 100%, 67%)';
    emailEL.style.backgroundColor = 'hsla(4, 100%, 67%, 0.5)';
    emailEL.style.color = 'hsl(4, 100%, 67%)';

    // Prevent the form from being submitted
    return false;
  } else {
 // Hide the error message
 errorValidEL.style.display = 'none';

 // Reset the styles of the input field
 emailEL.style.border = '';
 emailEL.style.backgroundColor = '';
 emailEL.style.color = '';

 // Allow the form to be submitted, hide the signup container and show the success message
  signupContainerEL.classList.add('hide');
  successMessageEL.classList.remove('hide');


  // Display the success message with the user's email in the span 
  successEmailEL.textContent = email;
  } 

}
