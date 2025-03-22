document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    const fname = document.querySelector('#fname');
    const lname = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const queryBoxes = document.querySelectorAll('.query-box input');
    const messageBox = document.querySelector('#text');
    const consentCheckbox = document.querySelector('#clickBox');
  
    const errorMsgFirstName = document.querySelector('#errorMsgFirstName');
    const errorMsgLastName = document.querySelector('#errorMsgLastName');
    const errorMsgEmail = document.querySelector('#errorMsgEmail');
    const errorMsgRadio = document.querySelector('#errorMsgRadio');
    const errorMsgBox = document.querySelector('#errorMsgBox');
    const errorCheckBox = document.querySelector('#errorCheckBox');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
      let isValid = true;
  
      // Helper function to add/remove error and success styles
      const setError = (element, errorMessage, errorElement) => {
        if (errorMessage) {
          element.classList.add('error-border');
          element.classList.remove('success-border');
          errorElement.textContent = errorMessage;
          isValid = false;
        } else {
          element.classList.remove('error-border');
          element.classList.add('success-border');
          errorElement.textContent = '';
        }
      };
  
      // Validate First Name
      setError(fname, !fname.value.trim() ? 'This field is required' : '', errorMsgFirstName);
  
      // Validate Last Name
      setError(lname, !lname.value.trim() ? 'This field is required' : '', errorMsgLastName);
  
      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        setError(email, 'This field is required', errorMsgEmail);
      } else if (!emailRegex.test(email.value)) {
        setError(email, 'Please enter a valid email address', errorMsgEmail);
      } else {
        setError(email, '', errorMsgEmail);
      }
  
      // Validate Query Type
      const isQuerySelected = Array.from(queryBoxes).some((box) => box.checked);
      setError(
        queryBoxes[0].parentElement, // Apply error to the parent container
        !isQuerySelected ? 'Please select a query type' : '',
        errorMsgRadio
      );
  
      // Validate Message Box
      setError(messageBox, !messageBox.value.trim() ? 'This field is required' : '', errorMsgBox);
  
      // Validate Consent Checkbox
      setError(
        consentCheckbox,
        !consentCheckbox.checked ? 'To submit this form, please consent to being contacted' : '',
        errorCheckBox
      );
  
      // If all validations pass, show success alert
      if (isValid) {
        alert("Thanks for filling the form, we'll be in touch soon!");
        form.reset(); // Reset the form
  
        // Remove all error and success styles after reset
        document.querySelectorAll('.error-border, .success-border').forEach((el) => {
          el.classList.remove('error-border', 'success-border');
        });
      }
    });
  });