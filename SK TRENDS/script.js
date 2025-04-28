// Show UPI ID field only if UPI is selected
const paymentRadios = document.querySelectorAll('input[name="payment"]');
const upiField = document.getElementById('upi-id-group');

paymentRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === "upi" && radio.checked) {
      upiField.style.display = 'block';
    } else {
      upiField.style.display = 'none';
    }
  });
});
