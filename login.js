function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
  
    if (email !== '' && password !== '') {
      fetch('https://6578d1aaf08799dc80461841.mockapi.io/user')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Failed to fetch user data');
        })
        .then((userData) => {
          const foundUser = userData.find(
            (user) => user.email === email && user.password === password
          );
          if (foundUser) {
            alert('Login successful!');
            // Redirect to task manager or profile page after successful login
            window.location.href = 'taskmanager.html';
          } else {
            alert('Incorrect email or password');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Login failed');
        });
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', loginUser);
  
