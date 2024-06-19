document
  .getElementById('registrationForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (validateForm(username, email, password)) {
      alert('Form submitted successfully!');
      this.submit();
    } else {
      alert('Please fill out the form correctly.');
    }
  });

function validateForm(username, email, password) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
    return false;
  }

  if (!emailPattern.test(email)) {
    return false;
  }

  return true;
}
