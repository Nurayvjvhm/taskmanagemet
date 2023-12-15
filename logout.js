function logoutUser() {
    // Implement logout logic here (e.g., clearing session data, redirecting, etc.)
    window.location.href = 'login.html'; // Redirect to login page after logout
  }
  
  const logoutButton = document.getElementById('logoutButton');
  logoutButton.addEventListener('click', logoutUser);
  