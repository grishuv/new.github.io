// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const username = 'its_my_love'; // Replace with actual username
  const password = 'not_sympathy'; // Replace with actual password

  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  if (enteredUsername === username && enteredPassword === password) {
    // Redirect to index.html if the login credentials are correct
    window.location.href = 'home.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
});
