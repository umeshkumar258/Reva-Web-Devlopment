document.getElementById('jee-form').addEventListener('submit', function (e) {
  e.preventDefault();

  let formIsValid = true;

  // Check for empty inputs
  const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
  requiredFields.forEach(function (field) {
    if (!field.value) {
      field.style.borderColor = 'red';
      formIsValid = false;
    } else {
      field.style.borderColor = '#ccc';
    }
  });

  // Validate phone number format
  const phoneField = document.getElementById('phone');
  if (phoneField && !phoneField.value.match(/^\d{10}$/)) {
    phoneField.style.borderColor = 'red';
    formIsValid = false;
  }

  if (formIsValid) {
    alert('Form submitted successfully!');
    // Submit form logic can be added here
    // e.target.submit(); // Uncomment to actually submit the form
  } else {
    alert('Please fill out all required fields correctly.');
  }
});
