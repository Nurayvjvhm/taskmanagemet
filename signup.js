function signUpUser(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
  
    if (name !== '' && email !== '' && password !== '') {
      const newUser = {
        name: name,
        email: email,
        password: password,
      };
  
      fetch('https://6578d1aaf08799dc80461841.mockapi.io/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => {
          if (response.ok) {
            alert('Sign up successful! You can now log in.');
            // Redirect to login page after successful signup
            window.location.href = 'login.html';
          } else {
            throw new Error('Failed to sign up');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Failed to sign up');
        });
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', signUpUser);
  
